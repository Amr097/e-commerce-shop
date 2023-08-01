import React from "react";
import CurratedPicks from "./Components/CurratedPicks/CurratedPicks";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import HomeCarousel from "./Components/HomeCarousel/HomeCarousel";
import "./Home.scss";

const HomePage = () => {
  return (
    <section className="home">
      <HomeCarousel />
      <CurratedPicks />
      <FeaturedProducts />
    </section>
  );
};

export default HomePage;
