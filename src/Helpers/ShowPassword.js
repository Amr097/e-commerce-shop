export function ShowPassword(e, inputId, setInputType) {
  const passwordInput = document.getElementById(inputId);

  if (passwordInput.type === "password") {
    setInputType("text");
    passwordInput.value !== ""
      ? e.currentTarget.classList.toggle("reset-width")
      : null;
  } else {
    setInputType("password");
    passwordInput.value !== ""
      ? e.currentTarget.classList.toggle("reset-width")
      : null;
  }
}
