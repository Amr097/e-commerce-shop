"use client";
import { React } from "react";
import Link from "next/link";
import "./Header.scss";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import SearchBar from "@/Reuseables/SearchBar";
import NavBar from "./Components/NavBar/NavBar";
import AccountMenu from "../../Reuseables/AccountMenu";
import { useSession } from "next-auth/react";

const Header = ({ signIn }) => {
  const { data: session, status } = useSession();

  return (
    <header className="header">
      <a href="/" className="logo">
        Proshop
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
              <p onClick={signIn}>Join us</p>
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
