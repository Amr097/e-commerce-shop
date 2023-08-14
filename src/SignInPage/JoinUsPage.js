import { React, useState, useEffect } from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import "./JoinUsPage.scss";
import { getProviders } from "next-auth/react";
import ContinueWith from "./Components/ContinueWith";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/Reuseables/Loader";
import ForgotPassword from "./Components/ForgotPassword";

const JoinUsPage = () => {
  const [signIn, setSignIn] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      setLoading(true);
      if (router.query) {
        const { callbackUrl } = router.query;
        console.log(callbackUrl);
      } else {
        router.push("/");
      }
      setLoading(false);
    }

    async function fetchProviders() {
      const myProviders = await getProviders();
      setProviders(Object.values(myProviders));
    }

    fetchProviders();
  }, []);

  return (
    <>
      {loading && (
        <Loader
          loading={{ state: loading, message: "Unauthorized", type: "error" }}
        />
      )}

      <div className="joinus">
        <p className="joinus__back">
          <span className="arrow-in-circle">
            {" "}
            <FaArrowLeft />{" "}
          </span>
          We'd be happy if you join us !<Link href="">Go Store</Link>
        </p>

        {signIn && !forgotPassword && (
          <SignIn forgotPasswordState={{ setForgotPassword, forgotPassword }} />
        )}

        {!signIn && !forgotPassword && (
          <SignUp forgotPasswordState={{ setForgotPassword, forgotPassword }} />
        )}

        {forgotPassword && (
          <ForgotPassword
            forgotPasswordState={{ setForgotPassword, forgotPassword }}
          />
        )}

        <p className="joinus__toggle">
          {signIn ? "Not a member?" : "Already have an account?"} &nbsp;{" "}
          <span
            onClick={() => {
              setSignIn((prev) => !prev);
              setForgotPassword(false);
            }}
          >
            {signIn ? "Create Account" : "Log in"}
          </span>
          .
        </p>
        <ContinueWith btns={providers} />
      </div>
    </>
  );
};

export default JoinUsPage;
