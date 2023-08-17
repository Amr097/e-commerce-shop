import React from "react";
import { BsArrowRight } from "react-icons/bs";

const BtnPrimary = ({ item }) => {
  return (
    <a className="btn-primary">
      <p className="btn__text">
        {" "}
        {item.bestSeller ? "Best Seller" : "Shop " + item.category}{" "}
      </p>
      <span className="btn__arrow">
        {" "}
        <BsArrowRight />
      </span>
    </a>
  );
};

export default BtnPrimary;
