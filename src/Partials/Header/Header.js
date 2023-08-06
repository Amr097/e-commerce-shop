"use client";
import { React, useState, useEffect } from "react";
import Link from "next/link";
import "./Header.scss";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { RiArrowDropDownFill } from "react-icons/ri";
import SearchBar from "@/Reuseables/SearchBar";
import NavBar from "./Components/NavBar/NavBar";
import AccountMenu from "../../Reuseables/AccountMenu";

const Header = ({ session }) => {
  const [loggedIn, setloggedIn] = useState(false);
  useEffect(() => {
    session ? setloggedIn(true) : setloggedIn(false);
  }, [session]);

  console.log(session);
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
              <p>Join us</p>
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
