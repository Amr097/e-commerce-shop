"use client";
import { React, useEffect } from "react";
import { featuredProducts } from "@/data";
import "./FeaturedProducts.scss";
import { v4 as uuidv4 } from "uuid";
import { FiShoppingCart } from "react-icons/fi";

const FeaturedProducts = () => {
  useEffect(() => {
    let arrowLeft = document.querySelector(".arrow__left");
    let swipeLeft = document.querySelector("#swipeLeft");
    arrowLeft.checked = true;
    swipeLeft.checked = true;
  }, []);

  const checkRadioBtn = (type) => {
    let swipeLeft = document.querySelector("#swipeLeft");
    let swipeRight = document.querySelector("#swipeRight");
    if (type === "right") swipeRight.checked = true;
    else swipeLeft.checked = true;
  };
  return (
    <div className="featured">
      <h2 className="heading-primary">Featured products</h2>

      <input
        type="radio"
        name="swipe"
        className="arrow__right"
        onClick={() => {
          checkRadioBtn("right");
        }}
      ></input>
      <input
        type="radio"
        name="swipe"
        className="arrow__left"
        onClick={() => {
          checkRadioBtn("left");
        }}
      ></input>

      <input type="radio" name="swipe-page" id="swipeLeft"></input>

      <input type="radio" name="swipe-page" id="swipeRight"></input>

      <ul className="featured__list">
        {featuredProducts.map((item) => (
          <li className="featured__item" key={uuidv4()}>
            <span className="featured__sale">Sale</span>
            <img
              src={item.image}
              alt={item.category + item.type}
              className="featured__img"
            />
            <div className="featured__price">
              <div className="left">
                <a className="product-text">{item.type}</a>
                <div className="container">
                  <a
                    className={
                      item.sale ? "product-price line" : "product-price"
                    }
                  >
                    {item.price}$
                  </a>
                  {item.sale && (
                    <a className="sale-price u-margin-left-micro">
                      {(item.price * item.sale) / 100}$
                    </a>
                  )}
                </div>
                {item.sale && (
                  <p className="featured__save save-text u-margin-top-micro">
                    (save {item.sale}%)
                  </p>
                )}
              </div>
              <div className="right">
                <FiShoppingCart
                  style={{ stroke: "white", width: "1.9rem", height: "1.9rem" }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <label className="featured__pagination--left" htmlFor="swipeLeft"></label>
      <label
        className="featured__pagination--right"
        htmlFor="swipeRight"
      ></label>
    </div>
  );
};

export default FeaturedProducts;
