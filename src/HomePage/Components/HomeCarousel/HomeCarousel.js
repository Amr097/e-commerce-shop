"use client";
import React, { useState } from "react";
import "./HomeCarousel.scss";
import { products } from "@/data";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={uuidv4()}>
            <Image
              className="swiper__image"
              width={3000}
              height={3000}
              src={product.image}
              alt={product.type + "" + product.category}
            />
            <h1 className="swiper__title heading-huge">
              Level up your style with our summer collections
            </h1>
            <a className="swiper__btn btn-primary">
              Shop now{" "}
              <span className="btn__arrow">
                {" "}
                <FaArrowRight />
              </span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="carousel">
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
          {products.map((dotIndex) => (
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
      </div> */}
    </>
  );
};

export default HomeCarousel;
