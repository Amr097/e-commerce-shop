"use client";
import { React, lazy, Suspense } from "react";
import Header from "@/Partials/Header/Header";
import HeaderRes from "@/Partials/HeaderResponsive/HeaderRes";
import HomePage from "@/HomePage/HomePage";
import { useSession, signIn, signOut } from "next-auth/react";

const Footer = lazy(() => import("@/Partials/Footer/Footer"));

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
        e.target !== document.querySelector(".btn-wrapper")
          ? (document.querySelector("#nav-toggle").checked = false)
          : "";
      }}
    >
      {/* <Suspense fallback={<h1>Loading...</h1>}></Suspense> */}
      <Header session={session} />
      <HeaderRes session={session} />
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