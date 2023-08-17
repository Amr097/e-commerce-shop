"use client";
import React from "react";
import "./HomeCarousel.scss";
import { featured } from "@/data";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {featured.map((product) => (
          <SwiperSlide key={uuidv4()}>
            <Image
              className="swiper__image"
              width={3000}
              height={3000}
              src={product.image}
              placeholder="blur"
              blurDataURL="data:images/blur.jpg"
              priority={true}
              alt={
                product.headingStart +
                " " +
                product.season +
                " " +
                product.headingEnd +
                " " +
                product.btnText
              }
            />
            <h1 className="swiper__title heading-huge">
              {product.headingStart +
                " " +
                product.season +
                " " +
                product.headingEnd}
            </h1>
            <a className="swiper__btn btn-primary">
              {product.btnText}
              <span className="btn__arrow">
                {" "}
                <BsArrowRight />
              </span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeCarousel;
