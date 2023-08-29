"use client";
import { React, useState } from "react";
import Header from "@/Partials/Header/Header";
import HeaderRes from "@/Partials/HeaderResponsive/HeaderRes";
import HomePage from "@/HomePage/HomePage";
import { useSession, signIn } from "next-auth/react";
import HeaderTape from "@/Partials/HeaderTape/HeaderTape";
import dynamic from "next/dynamic";

const DynamicFooterComponent = dynamic(
  () => import("@/Partials/Footer/Footer"),
  { ssr: false }
);

const MyApp = () => {
  const { data: session } = useSession();

  return (
    <div
      className="container"
      onClick={(e) => {
        e.target !== document.querySelector(".menu") &&
        e.target !== document.querySelector("#nav-toggle") &&
        e.target !== document.querySelector("#hamMenu") &&
        e.target.parentNode !== document.querySelector("#hamMenu") &&
        e.target !== document.querySelector(".menu__btn") &&
        e.target !== document.querySelector(".menu__icon") &&
        e.target !== document.querySelector(".menu__shop") &&
        e.target !== document.querySelector(".menu__shop--list") &&
        e.target !== document.querySelector(".btn-wrapper")
          ? (document.querySelector("#nav-toggle").checked = false)
          : "";
      }}
    >
      <HeaderTape />
      <Header session={session} signIn={signIn} />
      <HeaderRes session={session} signIn={signIn} />
      <main>
        <HomePage />
      </main>

      {<DynamicFooterComponent />}
    </div>
  );
};

export default MyApp;
