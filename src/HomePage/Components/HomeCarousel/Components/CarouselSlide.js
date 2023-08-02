"use client";
import { React } from "react";
import { FaArrowRight } from "react-icons/fa";

const CarouselSlide = ({ product, products, index, setIndex }) => {
  return (
    <li className="carousel__item">
      <img className="carousel__image" src={product.image} alt="" />

      <h1 className="carousel__title heading-huge">
        Level up your style with our summer collections
      </h1>
      <a className="carousel__btn btn-primary">
        Shop now{" "}
        <span className="btn__arrow">
          {" "}
          <FaArrowRight />
        </span>
      </a>
    </li>
  );
};

export default CarouselSlide;
