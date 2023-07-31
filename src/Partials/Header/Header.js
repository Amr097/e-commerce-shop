"use client";
import { React } from "react";
import "./Header.scss";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import SearchBar from "@/Reuseables/SearchBar";
import NavBar from "./Components/NavBar/NavBar";

const Header = () => {
  return (
    <header className="header">
      <p className="logo">Proshop</p>
      <div className="navbar__container">
        <NavBar />
        <div className="header__services">
          <a href="/cart">
            {" "}
            <FiHeart className="services-icon" /> &nbsp;
          </a>

          <a href="/cart">
            {" "}
            <FiShoppingCart className="services-icon" /> &nbsp;
          </a>

          <a href="/cart" className="services-btn">
            {" "}
            <FiUser /> &nbsp; Sign In
          </a>

          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
