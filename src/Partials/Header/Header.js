"use client";
import { React, useState } from "react";
import Link from "next/link";
import "./Header.scss";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

import SearchBar from "@/Reuseables/SearchBar";
import NavBar from "./Components/NavBar/NavBar";
import AccountMenu from "../../Reuseables/AccountMenu";

const Header = () => {
  const [loggedIn, setloggedIn] = useState(true);
  return (
    <header className="header">
      <p className="logo">Proshop</p>
      <div className="navbar__container">
        <NavBar />

        <div className="header__services">
          {loggedIn ? (
            <AccountMenu />
          ) : (
            <a className="services-btn">
              {" "}
              <FiUser /> &nbsp;
              <p>Sign In</p>
              <RiArrowDropDownFill />
            </a>
          )}

          <Link href="/cart">
            {" "}
            <FiHeart className="services-icon" />
          </Link>

          <Link href="/cart">
            {" "}
            <FiShoppingCart className="services-icon" />
          </Link>

          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
