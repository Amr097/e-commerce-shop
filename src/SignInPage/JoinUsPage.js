import React from "react";
import SignIn from "./Components/SingIn";
import SignUp from "./Components/SignUp";
import { FaArrowLeft } from "react-icons/fa";

import Link from "next/link";
import "./JoinUsPage.scss";

const JoinUsPage = () => {
  return (
    <div className="joinus">
      <p className="joinus__back">
        <span className="arrow-in-circle">
          {" "}
          <FaArrowLeft />{" "}
        </span>
        We'd be happy if you join us !<Link href="">Go Store</Link>
      </p>

      <SignIn />
      <SignUp />
      <div className="joinus__socials">Socials</div>
    </div>
  );
};

export default JoinUsPage;
