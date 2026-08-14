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

document.querySelectorAll(".zoom-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const code = btn.closest(".code-container").querySelector(".code-snippet code").textContent;
    modalCode.textContent = code;
    Prism.highlightElement(modalCode);
    modal.showModal();
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
})