import React from "react";
import Image from "next/image";
import { currated } from "@/data";
import "./CurratedPicks.scss";
import BtnPrimary from "@/Reuseables/BtnPrimary";
import { v4 as uuidv4 } from "uuid";

const CurratedPicks = () => {
  return (
    <div className="currated">
      <h2 className="heading-primary">Currated picks</h2>
      <ul className="currated__list">
        {currated.map((item) => (
          <li className="currated__item" key={uuidv4()}>
            <div className="currated__cover"></div>
            <Image
              src={item.image}
              alt={item.btnText}
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="data:images/blur.jpg"
              className="currated__img"
            />

            <BtnPrimary item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurratedPicks;
