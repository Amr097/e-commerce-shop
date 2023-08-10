import { React, useState, useEffect } from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import "./JoinUsPage.scss";
import { getProviders } from "next-auth/react";
import ContinueWith from "./Components/ContinueWith";

export async function myproviders(context) {
  const providers = await getProviders();
  return providers;
}

const JoinUsPage = () => {
  const [signIn, setSignIn] = useState(true);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function fetchProviders() {
      const myProviders = await getProviders();
      setProviders(Object.values(myProviders));
    }

    fetchProviders();
  }, []);

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
      <ContinueWith btns={providers} />
    </div>
  );
};

export default JoinUsPage;
