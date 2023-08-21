"use client";
import React from "react";
import Header from "@/Partials/Header/Header";
import Footer from "@/Partials/Footer/Footer";
import HeaderRes from "@/Partials/HeaderResponsive/HeaderRes";
import JoinUsPage from "@/SignInPage/JoinUsPage";
import { useSession } from "next-auth/react";

const JoinUsWrapper = () => {
  const { data: session } = useSession();
  return (
    <div
      className="joinus-page-container"
      onClick={(e) => {
        e.target !== document.querySelector(".menu") &&
        e.target !== document.querySelector("#nav-toggle") &&
        e.target !== document.querySelector("#hamMenu") &&
        e.target.parentNode !== document.querySelector("#hamMenu") &&
        e.target !== document.querySelector(".menu__btn") &&
        e.target !== document.querySelector(".menu__icon") &&
        e.target !== document.querySelector(".menu__shop") &&
        e.target !== document.querySelector(".btn-wrapper")
          ? (document.querySelector("#nav-toggle").checked = false)
          : "";
      }}
    >
      <Header />
      <HeaderRes />
      <JoinUsPage session={session} />
      <Footer />
    </div>
  );
};

export default JoinUsWrapper;
