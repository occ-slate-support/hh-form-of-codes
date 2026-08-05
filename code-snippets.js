function copyHidden(button) {
  const code = button.nextElementSibling.innerText;
  const buttonTempText = button.innerText;
  navigator.clipboard.writeText(code).then(() => {
    button.innerText = "Copied!";
    setTimeout(() => {
      button.innerText = buttonTempText;
    }, 2000);
  });
}
