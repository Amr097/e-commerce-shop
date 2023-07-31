import React from "react";
import CurratedPicks from "./Components/CurratedPicks/CurratedPicks";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import "./Home.scss";

const HomePage = () => {
  return (
    <section className="home">
      <CurratedPicks />
      <FeaturedProducts />
    </section>
  );
};

export default HomePage;
