import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BtnPrimary = ({ item }) => {
  return (
    <a className="btn-primary">
      <p className="btn__text">
        {" "}
        {item.bestSeller ? "Best Seller" : "Shop " + item.category}{" "}
      </p>
      <span className="btn__arrow">
        {" "}
        <FaArrowRight />
      </span>
    </a>
  );
};

export default BtnPrimary;
