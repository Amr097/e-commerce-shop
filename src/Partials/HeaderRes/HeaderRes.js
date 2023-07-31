import React from "react";
import NavMenu from "./Components/NavMenu/NavMenu";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import SearchBar from "@/Reuseables/SearchBar";
import "./HeaderRes.scss";

const HeaderRes = () => {
  return (
    <div className="res__header">
      <div className="res__nav">
        <div className="res__left">
          <NavMenu />
          <p className="logo">Proshop</p>
        </div>

        <div className="res__services">
          <a href="/cart">
            {" "}
            <FiShoppingCart className="services-icon " /> &nbsp;
          </a>

          <a href="/cart">
            {" "}
            <FiHeart className="services-icon " /> &nbsp;
          </a>

          <a href="/cart">
            {" "}
            <FiUser className="services-icon " /> &nbsp;
          </a>
        </div>
      </div>

      <SearchBar />
    </div>
  );
};

export default HeaderRes;
