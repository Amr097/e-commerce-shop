"use client";
import { React, lazy, Suspense } from "react";

import Header from "@/Partials/Header/Header";
import HeaderRes from "@/Partials/HeaderRes/HeaderRes";
import HomePage from "@/HomePage/HomePage";

const Footer = lazy(() => import("@/Partials/Footer/Footer"));

//const HeaderRes = lazy(() => import("@/Partials/HeaderRes/HeaderRes"));

export default function Home() {
  return (
    <div
      className="container"
      onClick={(e) => {
        e.target !== document.querySelector(".menu") &&
        e.target !== document.querySelector("#nav-toggle") &&
        e.target !== document.querySelector("#hamMenu") &&
        e.target.parentNode !== document.querySelector("#hamMenu") &&
        e.target !== document.querySelector(".menu__btn") &&
        e.target !== document.querySelector(".menu__icon")
          ? (document.querySelector("#nav-toggle").checked = false)
          : "";
      }}
    >
      {/* <Suspense fallback={<h1>Loading...</h1>}></Suspense> */}
      <Header />
      <HeaderRes />
      <main>
        <HomePage />
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
