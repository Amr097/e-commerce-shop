"use client";
import { React, useState } from "react";
import "./HomeCarousel.scss";
import { products } from "@/data";
import { v4 as uuidv4 } from "uuid";
import CarouselSlide from "./Components/CarouselSlide";
import { validateAndSlide } from "./Functions/slideCarousel";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="carousel">
      <div className="carousel__arrow">
        <input
          type="radio"
          name="arrow"
          className="carousel__arrow--left"
          onClick={() => validateAndSlide("left", index, setIndex)}
        ></input>
        <input
          name="arrow"
          type="radio"
          className="carousel__arrow--right"
          onClick={() => validateAndSlide("right", index, setIndex)}
        ></input>
      </div>
      <ul className="carousel__list">
        {products.map((product) => (
          <CarouselSlide
            product={product}
            products={products}
            index={index}
            setIndex={setIndex}
            key={uuidv4()}
          />
        ))}
      </ul>
      <div className="carousel__dots">
        {products.map((dot, dotIndex) => (
          <span
            key={uuidv4()}
            className={index === dotIndex ? "carousel__dots--active" : ""}
            onClick={() => {
              validateAndSlide("dot", index, setIndex, dotIndex);
            }}
          >
            •
          </span>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
