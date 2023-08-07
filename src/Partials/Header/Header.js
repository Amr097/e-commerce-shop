"use client";
import { React, seState, useEffect } from "react";
import Link from "next/link";
import "./Header.scss";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { RiArrowDropDownFill } from "react-icons/ri";
import SearchBar from "@/Reuseables/SearchBar";
import NavBar from "./Components/NavBar/NavBar";
import AccountMenu from "../../Reuseables/AccountMenu";

const Header = ({ session, signIn }) => {
  return (
    <header className="header">
      <p className="logo">Proshop</p>
      <div className="navbar__container">
        <NavBar />

        <div className="header__services">
          {session ? (
            <AccountMenu />
          ) : (
            <a className="services-btn">
              {" "}
              <FiUser /> &nbsp;
              <p onClick={signIn}>Join us</p>
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
