import React from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import Image from "next/image";
const FeaturedItem = ({ item }) => {
  return (
    <li className="featured__item">
      {item.sale && <span className="featured__sale">Sale</span>}
      <img
        src={item.image}
        alt={item.category + item.type}
        className="featured__img"
      />
      <div className="featured__price">
        <div className="left">
          <a className="product-text">{item.type}</a>
          <div className="container">
            <a className={item.sale ? "product-price line" : "product-price"}>
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
          <div className="right__cart">
            <FiShoppingCart
              style={{ stroke: "white", width: "1.9rem", height: "1.9rem" }}
            />
          </div>
          <div className="right__heart">
            <FiHeart
              style={{
                stroke: "white",
                width: "2rem",
                height: "2rem",
              }}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default FeaturedItem;
