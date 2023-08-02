export function slideToLeft(index, type) {
  const carouselTrack = document.querySelector(".carousel__list");
  const currentSlide = document.querySelectorAll(".carousel__item")[index];

  const width = currentSlide.getBoundingClientRect().width;

  let amountMoved;

  document.documentElement.style.setProperty("--custom-black-c", "#0a0a0a");

  if (type === "dot") {
    amountMoved = width * (index + 1);
    if (index === 0)
      document.documentElement.style.setProperty("--custom-gray-c", "#a3a3a3");
  } else {
    amountMoved = width * index;
    setTimeout(() => {
      document.querySelector(".carousel__arrow--left").checked = false;
    }, 350);

    if (index === 1)
      document.documentElement.style.setProperty("--custom-gray-c", "#a3a3a3");
    if (index === 0) return;
  }

  const amountToMove = amountMoved - width + "px";

  carouselTrack.style.transform = `translateX( -${amountToMove})`;
  document.querySelector(".carousel__arrow--right").style.pointerEvents = "all";
}

export function slideToRight(index, type) {
  const allSlides = document.querySelectorAll(".carousel__item");
  const carouselTrack = document.querySelector(".carousel__list");
  const currentSlide = document.querySelectorAll(".carousel__item")[index];
  const width = currentSlide.getBoundingClientRect().width;
  let amountToMove;

  if (type === "dot") {
    amountToMove = width * index + "px";
    if (index === allSlides.length - 1) {
      document.querySelector(".carousel__arrow--right").style.pointerEvents =
        "none";
      document.documentElement.style.setProperty("--custom-black-c", "#a3a3a3");
    }
  } else {
    amountToMove = width * (index + 1) + "px";
    setTimeout(() => {
      document.querySelector(".carousel__arrow--right").checked = false;
    }, 350);
  }

  if (index === allSlides.length - 2)
    document.documentElement.style.setProperty("--custom-black-c", "#a3a3a3");

  if (!type && index === allSlides.length - 1) return;
  else carouselTrack.style.transform = `translateX( -${amountToMove})`;

  document.documentElement.style.setProperty("--custom-gray-c", "#0a0a0a");
  document.querySelector(".carousel__arrow--left").style.pointerEvents = "all";
}

export function validateAndSlide(type, index, setIndex, dotIndex) {
  if (type === "left") {
    document.querySelector(".carousel__arrow--right").style.pointerEvents =
      "all";
    slideToLeft(index, setIndex);
    if (index !== 0) {
      setIndex((prev) => {
        return prev - 1;
      });

      slideToLeft(index);
    }
    if (index === 1) {
      document.querySelector(".carousel__arrow--left").style.pointerEvents =
        "none";
    }
  } else if (type === "right") {
    const allSlides = document.querySelectorAll(".carousel__item");
    if (index !== allSlides.length - 1) {
      document.querySelector(".carousel__arrow--left").style.pointerEvents =
        "all";
      setIndex((prev) => {
        return prev + 1;
      });

      slideToRight(index);
    }
    if (index === allSlides.length - 2) {
      document.querySelector(".carousel__arrow--right").style.pointerEvents =
        "none";
    }
  } else if (type === "dot") {
    if (dotIndex > index) {
      slideToRight(dotIndex, "dot");
      setIndex(dotIndex);
    }

    if (dotIndex < index) {
      slideToLeft(dotIndex, "dot");
      setIndex(dotIndex);
    }
  }
}
