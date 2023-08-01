export function changeArrowColor(type, setArrowLeft, setArrowRight) {
  if (type === "right") {
    document.documentElement.style.setProperty("--custom-black", "#a3a3a3");
    document.documentElement.style.setProperty("--custom-gray", "#0a0a0a");
    setArrowRight(true);
    setArrowLeft(false);
    let arrowLeft = document.querySelector(".arrow__left");
    arrowLeft.checked = false;
  } else {
    console.log("works");
    document.documentElement.style.setProperty("--custom-black", "#0a0a0a");
    document.documentElement.style.setProperty("--custom-gray", "#a3a3a3");
    setArrowRight(false);
    setArrowLeft(true);
    let arrowRight = document.querySelector(".arrow__right");
    arrowRight.checked = false;
  }
}
