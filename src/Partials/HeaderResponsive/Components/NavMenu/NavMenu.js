"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./NavMenu.scss";

const NavMenu = () => {
  const unCheckMenu = () => {
    document.querySelector("#nav-toggle").checked = false;
  };

  return (
    <div className="menu">
      <input type="checkbox" className="menu__checkbox" id="nav-toggle" />
      <label htmlFor="nav-toggle" className="menu__btn">
        <span className="menu__icon">&nbsp;</span>
      </label>
      <ul tabIndex="0" id="hamMenu" className="menu__list">
        <li key={uuidv4()} className="menu__item">
          {" "}
          <button className="menu__shop">Shop</button>
          <ul className="menu__shop--list">
            {["Men", "Women", "Children"].map((item) => (
              <li key={uuidv4()} className="menu__shop--item">
                <a className="" href={`#${item}`} onClick={unCheckMenu}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </li>
        {["Best sellers", "New arrivals", "Trending"].map((item) => (
          <li key={uuidv4()} className="menu__item">
            <a className="" href={`#${item}`} onClick={unCheckMenu}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
