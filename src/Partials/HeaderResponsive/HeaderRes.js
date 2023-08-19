"use client";
import { React } from "react";
import NavMenu from "./Components/NavMenu/NavMenu";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import SearchBar from "@/Reuseables/SearchBar";
import "./HeaderRes.scss";
import AccountMenu from "../../Reuseables/AccountMenu";

const HeaderRes = ({ session, signIn }) => {
  return (
    <div className="res__header">
      <div className="res__left">
        <NavMenu />
        <a href="/" className="logo">
          N<p>O</p>
          STRA
        </a>
      </div>

      <SearchBar />

      <div className="res__services">
        {session ? (
          <AccountMenu />
        ) : (
          <a onClick={signIn}>
            <FiUser className="services-icon " />
          </a>
        )}

        <a>
          {" "}
          <FiHeart className="services-icon " /> &nbsp;
        </a>

        <a>
          {" "}
          <FiShoppingCart className="services-icon " /> &nbsp;
        </a>
      </div>
    </div>
  );
};

export default HeaderRes;
