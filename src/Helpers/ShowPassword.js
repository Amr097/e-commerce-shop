export function ShowPassword(e, inputId, setInputType) {
  const passwordInput = document.getElementById(inputId);

  if (passwordInput.type === "password") {
    setInputType("text");

    e.currentTarget.classList.toggle("reset-width");
  } else {
    setInputType("password");

    e.currentTarget.classList.toggle("reset-width");
  }
}
