import { brands } from "@/data";
import React from "react";
import Image from "next/image";
import { brandsServices } from "@/data";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiMaskHappyDuotone } from "react-icons/pi";
import { FaLuggageCart } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { v4 as uuidv4 } from "uuid";

import "./Brands.scss";

const Brands = () => {
  return (
    <div className="brands">
      <h2 className="heading-primary">Brands</h2>
      <div className="brands__container">
        {brands.map((logo) => (
          <Image
            key={uuidv4()}
            src={logo}
            alt={logo}
            width={1500}
            height={1500}
            placeholder="blur"
            blurDataURL="data:images/blur.webp"
            className="brands__logo"
          />
        ))}
      </div>

      <h2 className="heading-medium-2 brands__title">
        We provide best <br /> customer experiences.
      </h2>

      <p className="brands__text text-small">
        We ensure our customers have the best shopping experience.
      </p>

      <ul className="brands__services">
        {brandsServices.map((item) => (
          <li className="brands__services--item" key={uuidv4()}>
            <div>
              {item.icon === "GiTakeMyMoney" && (
                <GiTakeMyMoney className="brands-icon" />
              )}
              {item.icon === "PiMaskHappyDuotone" && (
                <PiMaskHappyDuotone className="brands-icon" />
              )}
              {item.icon === "FaLuggageCart" && (
                <FaLuggageCart className="brands-icon" />
              )}
              {item.icon === "LiaShippingFastSolid" && (
                <LiaShippingFastSolid className="brands-icon" />
              )}
            </div>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;
