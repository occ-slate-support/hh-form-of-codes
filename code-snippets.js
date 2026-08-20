const tabs = ["index", "widget", "mailings"];

function getCurrentPage() {
  const file = window.location.pathname.split("/").pop();
  const page = file.replace(".html", "") || "index";
  return tabs.includes(page) ? page : tabs[0];
}

const activeTab = getCurrentPage();
// Universal Card Template Function

async function renderFromTemplate({ url, template, gallery, fill }) {
  const res = await fetch(url);
  const items = await res.json();

  gallery.replaceChildren();

  for (const item of items) {
    const node = template.content.cloneNode(true);
    fill(node, item);
    gallery.append(node);
  }

  Prism.highlightAllUnder(gallery);
}

if (activeTab === tabs[1]) {
  const widgetGallery = document.getElementById("grid-widgets");
  const widgetTemplate = document.getElementById("template-widget-card");
  renderFromTemplate({
    url: "widgets.json",
    template: widgetTemplate,
    gallery: widgetGallery,
    fill: (node, item) => {
      node.querySelector(".template-information h2").textContent = item.title;
      node.querySelector(".demo").innerHTML = item.code;
      node.querySelector(".code-snippet code").textContent = item.code;
      node.querySelector(".hidden-code").textContent = item.code;
    },
  });
} else if (activeTab === tabs[2]) {
  const mailingGallery = document.getElementById("grid-mailings");
  const mailingTemplate = document.getElementById("template-mailing-card");
  renderFromTemplate({
    url: "mailings.json",
    template: mailingTemplate,
    gallery: mailingGallery,
    fill: (node, item) => {
      node.querySelector(".template-information h2").textContent = item.title;
      node.querySelector(".demo iframe").srcdoc = item.demo;
      node.querySelector(".code-snippet code").textContent = item.code;
      node.querySelector(".hidden-code").textContent = item.code;
    },
  });
}

// Copy functionality

let resetTimer = null;

function copyHidden(button) {
  clearTimeout(resetTimer);

  if (button.dataset.originalText) {
    button.innerText = button.dataset.originalText;
  } else {
    button.dataset.originalText = button.innerText;
  }

  const codeSnippet = button.nextElementSibling.innerText;
  const buttonTempHeight = button.offsetHeight + "px";
  button.style.height = "";

  navigator.clipboard.writeText(codeSnippet).then(() => {
    button.innerText = "Copied!";
    button.style.height = buttonTempHeight;
    resetTimer = setTimeout(() => {
      button.innerText = button.dataset.originalText;
      button.style.height = "";
      delete button.dataset.originalText;
    }, 2000);
  });
}

// Zoom-in functionality

if ([tabs[0], tabs[1], tabs[2]].includes(activeTab)) {
  let modal;

  switch (activeTab) {
    case tabs[1]:
      modal = document.querySelector(".snippet-modal");
      break;
    case tabs[2]:
      modal = document.querySelector(".snippet-modal");
      break;
  }

  const modalCode = modal.querySelector(".modal-code");

  if ([tabs[1], tabs[2]].includes(activeTab)) {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".zoom-btn");
      if (!btn) return;

      const code = btn
        .closest(".code-container")
        .querySelector(".code-snippet code").textContent;
      modalCode.textContent = code;
      Prism.highlightElement(modalCode);
      modal.showModal();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }
}
