export function checkRadioBtn(type) {
  let swipeLeft = document.querySelector("#swipeLeft");
  let swipeRight = document.querySelector("#swipeRight");

  if (type === "right-arrow") {
    swipeRight.checked = true;
    document.documentElement.style.setProperty("--custom-black", "#a3a3a3");
    document.documentElement.style.setProperty("--custom-gray", "#0a0a0a");
  } else if (type === "left-arrow") {
    document.documentElement.style.setProperty("--custom-black", "#0a0a0a");
    document.documentElement.style.setProperty("--custom-gray", "#a3a3a3");
    swipeLeft.checked = true;
  }
}

///////////////////////////////////////////////
///////////////////////////////////////////////

export const handleStart = (e, swipeState) => {
  swipeState.current.isSwiping = true;
  if (e.touches) {
    const touch = e.touches[0];
    swipeState.current.currentX = touch.clientX;
  } else {
    const localX = e.clientX - e.target.offsetLeft;
    swipeState.current.currentX = localX;
  }
};

///////////////////////////////////////////////
///////////////////////////////////////////////

export function changeArrowColor(type, setArrowLeft, setArrowRight) {
  if (type === "right") {
    document.documentElement.style.setProperty("--custom-black", "#a3a3a3");
    document.documentElement.style.setProperty("--custom-gray", "#0a0a0a");
    setArrowRight(true);
    setArrowLeft(false);
    let arrowLeft = document.querySelector(".arrow__left");
    let arrowRight = document.querySelector(".arrow__right");
    arrowRight.checked = false;
    arrowLeft.checked = false;
  } else {
    document.documentElement.style.setProperty("--custom-black", "#0a0a0a");
    document.documentElement.style.setProperty("--custom-gray", "#a3a3a3");
    setArrowRight(false);
    setArrowLeft(true);
    let arrowLeft = document.querySelector(".arrow__left");
    let arrowRight = document.querySelector(".arrow__right");

    arrowRight.checked = false;
    arrowLeft.checked = false;
  }
}

///////////////////////////////////////////////
///////////////////////////////////////////////

export const handleMove = (e, swipeState) => {
  if (swipeState.current.isSwiping) {
    const touch = e.touches[0];
    swipeState.current.draggedX = touch.clientX;
  }
};

///////////////////////////////////////////////
///////////////////////////////////////////////

export const handleEnd = (e, swipeState, setArrowLeft, setArrowRight) => {
  const currentX = swipeState.current.currentX;
  const draggedX = swipeState.current.draggedX;
  const isSwiped = swipeState.current.isSwiping;
  if (isSwiped && currentX && draggedX) {
    if (currentX > draggedX) {
      changeArrowColor("right", setArrowLeft, setArrowRight);
      checkRadioBtn("right-arrow");
    } else if (currentX < draggedX) {
      changeArrowColor("left", setArrowLeft, setArrowRight);
      checkRadioBtn("left-arrow");
    }

    swipeState.current.isSwiping = false;
    swipeState.current.draggedX = null;
    swipeState.current.currentX = null;
  }
};

///////////////////////////////////////////////
///////////////////////////////////////////////

export const handleDrag = (e, swipeState, setArrowLeft, setArrowRight) => {
  const localX = e.clientX - e.target.offsetLeft;
  swipeState.current.draggedX = localX;
  handleEnd(e, swipeState, setArrowLeft, setArrowRight);
};
