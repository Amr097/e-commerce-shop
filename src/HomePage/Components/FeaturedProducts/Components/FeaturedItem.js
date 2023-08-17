import React from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import Image from "next/image";
const FeaturedItem = ({ item }) => {
  return (
    <li className="featured__item">
      {item.sale && <span className="featured__sale">Sale</span>}
      <Image
        src={item.image}
        alt={item.category + item.type}
        width={2000}
        height={2000}
        placeholder="blur"
        blurDataURL="data:images/blur.jpg"
        className="featured__img"
      />
      <div className="featured__price">
        <div className="left">
          <a className="product-text">{item.type}</a>
          <div className="container">
            {item.sale && (
              <a className="sale-price">
                {item.price - (item.price * item.sale) / 100}$
              </a>
            )}
            <a
              className={
                item.sale
                  ? "product-price line u-margin-left-micro u-translate-y-small"
                  : "product-price"
              }
            >
              {item.price}$
            </a>
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
