export function ShowPassword(e, inputId) {
  const passwordInput = document.getElementById(inputId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordInput.value !== ""
      ? e.currentTarget.classList.toggle("reset-width")
      : null;
  } else {
    passwordInput.type = "password";
    passwordInput.value !== ""
      ? e.currentTarget.classList.toggle("reset-width")
      : null;
  }
}
