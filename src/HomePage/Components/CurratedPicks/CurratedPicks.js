import React from "react";
import { products } from "@/data";
import "./CurratedPicks.scss";
import BtnPrimary from "@/Reuseables/BtnPrimary";
import { v4 as uuidv4 } from "uuid";

const CurratedPicks = () => {
  return (
    <div className="currated">
      <h2 className="heading-primary">Currated picks</h2>
      <ul className="currated__list">
        {products.map((item) => (
          <li className="currated__item" key={uuidv4()}>
            <img
              src={item.image}
              alt={item.category + item.type}
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
