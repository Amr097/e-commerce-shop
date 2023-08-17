"use client";
import { React, lazy, Suspense } from "react";
import Header from "@/Partials/Header/Header";
import HeaderRes from "@/Partials/HeaderResponsive/HeaderRes";
import HomePage from "@/HomePage/HomePage";
import { useSession, signIn } from "next-auth/react";
import HeaderTape from "@/Partials/HeaderTape/HeaderTape";

const Footer = lazy(() => import("@/Partials/Footer/Footer"));

const MyApp = () => {
  const { data: session, status } = useSession();

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
        e.target !== document.querySelector(".btn-wrapper")
          ? (document.querySelector("#nav-toggle").checked = false)
          : "";
      }}
    >
      {/* <Suspense fallback={<h1>Loading...</h1>}></Suspense> */}
      <HeaderTape />
      <Header session={session} signIn={signIn} />
      <HeaderRes session={session} signIn={signIn} />
      <main>
        <HomePage />
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};

export default MyApp;
