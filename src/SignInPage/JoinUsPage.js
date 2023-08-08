import { React, useState } from "react";
import SignIn from "./Components/SingIn";
import SignUp from "./Components/SignUp";
import { FaArrowLeft } from "react-icons/fa";

import Link from "next/link";
import "./JoinUsPage.scss";

const JoinUsPage = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <div className="joinus">
      <p className="joinus__back">
        <span className="arrow-in-circle">
          {" "}
          <FaArrowLeft />{" "}
        </span>
        We'd be happy if you join us !<Link href="">Go Store</Link>
      </p>

      {signIn ? <SignIn /> : <SignUp />}
      <p className="joinus__toggle">
        {signIn ? "Not a member?" : "Already have an account?"} &nbsp;{" "}
        <span
          onClick={() => {
            setSignIn((prev) => !prev);
          }}
        >
          {signIn ? "Create Account" : "Log in"}
        </span>
        .
      </p>
      {/* <div className="joinus__socials">Socials</div> */}
    </div>
  );
};

export default JoinUsPage;
