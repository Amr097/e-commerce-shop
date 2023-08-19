import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          {" "}
          <a className="navbar__link">Shop</a>
          <div className="navbar__item--dropdown">
            <ul>
              {["Men", "Women", "Children"].map((item) => (
                <li key={uuidv4()}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </li>
        {["Best sellers", "New arrivals", "Trending"].map((item) => (
          <li className="navbar__item" key={uuidv4()}>
            <a className="navbar__link">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
