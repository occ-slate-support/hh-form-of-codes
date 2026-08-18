// Card Template (Widget)

const widgetTemplate = document.getElementById("template-widget-card");
const gallery = document.getElementById("grid-widgets");

async function renderWidgets() {
  const res = await fetch("widgets.json");
  const widgets = await res.json();

  for (const widget of widgets) {
    const node = widgetTemplate.content.cloneNode(true);

    node.querySelector(".template-information h2").textContent = widget.title;
    node.querySelector(".demo").innerHTML = widget.code;
    node.querySelector(".code-snippet code").textContent = widget.code;
    node.querySelector(".hidden-code").textContent = widget.code;

    node.querySelector(".zoom-btn").textContent = widget.zoomButtonText;
    node.querySelector(".copy-btn").textContent = widget.copyButtonText;

    gallery.append(node);
  }

  Prism.highlightAllUnder(gallery);
}

renderWidgets();

// Card Template (Mailing)


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

const modal = document.querySelector(".snippet-modal");
const modalCode = modal.querySelector(".modal-code");

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".zoom-btn");
  if (!btn) return;

  const code = btn.closest(".code-container").querySelector(".code-snippet code").textContent;
  modalCode.textContent = code;
  Prism.highlightElement(modalCode);
  modal.showModal();
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
})