"use client";
import { React } from "react";
import "./Header.scss";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import SearchBar from "@/Reuseables/SearchBar";
import NavBar from "./Components/NavBar/NavBar";
import AccountMenu from "../../Reuseables/AccountMenu";
import { useSession } from "next-auth/react";

const Header = ({ signIn }) => {
  const { data: session } = useSession();

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          N<p>O</p>
          STRA
        </a>
        <div className="navbar__container">
          <NavBar />

          <div className="header__services">
            {session ? (
              <AccountMenu />
            ) : (
              <a className="services-btn">
                {" "}
                <FiUser /> &nbsp;
                <p onClick={signIn}>Join us?</p>
              </a>
            )}

            <a>
              {" "}
              <FiHeart className="services-icon" />
            </a>

            <a>
              {" "}
              <FiShoppingCart className="services-icon" />
            </a>

            <SearchBar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
