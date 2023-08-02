export function checkRadioBtn(type) {
  let swipeLeft = document.querySelector("#swipeLeft");
  let swipeRight = document.querySelector("#swipeRight");
  // console.log("works");
  if (type === "right-arrow") {
    swipeRight.checked = true;
    document.documentElement.style.setProperty("--custom-black", "#a3a3a3");
    document.documentElement.style.setProperty("--custom-gray", "#0a0a0a");
    // setArrowRight(true);
    // setArrowLeft(false);
  } else if (type === "left-arrow") {
    document.documentElement.style.setProperty("--custom-black", "#0a0a0a");
    document.documentElement.style.setProperty("--custom-gray", "#a3a3a3");
    swipeLeft.checked = true;
  }
}
