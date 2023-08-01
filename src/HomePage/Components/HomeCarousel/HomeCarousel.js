import React from "react";
import "./HomeCarousel.scss";
import { products } from "@/data";
import { v4 as uuidv4 } from "uuid";
import { FaArrowRight } from "react-icons/fa";

const HomeCarousel = () => {
  return (
    <div className="carousel">
      <ul className="carousel__list">
        {products.map((product) => (
          <li className="carousel__item" key={uuidv4()}>
            <img className="carousel__image" src={product.image} alt="" />
            <div className="arrow">
              <span className="arrow__left"></span>
              <span className="arrow__right"></span>
            </div>
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
            <div className="carousel__dots">
              {products.map((product) => (
                <span key={uuidv4()}>•</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeCarousel;
