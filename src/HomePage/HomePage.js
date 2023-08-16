import React from "react";
import CurratedPicks from "./Components/CurratedPicks/CurratedPicks";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import HomeCarousel from "./Components/HomeCarousel/HomeCarousel";
import "./Home.scss";

const HomePage = () => {
  return (
    <section
      className="home"
      onClick={(e) => {
        const nextArrow = document.querySelector(".swiper-button-next");
        const prevArrow = document.querySelector(".swiper-button-prev");

        if (e.target === nextArrow) {
          nextArrow.classList.add("arrow-right-animation");
          setTimeout(() => {
            nextArrow.classList.remove("arrow-right-animation");
          }, 320);
        } else if (e.target === prevArrow) {
          prevArrow.classList.add("arrow-left-animation");
          setTimeout(() => {
            prevArrow.classList.remove("arrow-left-animation");
          }, 320);
        }
      }}
    >
      <HomeCarousel />
      <CurratedPicks />
      <FeaturedProducts />
    </section>
  );
};

export default HomePage;
