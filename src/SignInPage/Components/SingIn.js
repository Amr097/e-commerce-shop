import React from "react";
import JoinUsForm from "@/Reuseables/JoinUsForm";
import Link from "next/link";

const type = "Sign in";
const initialValues = {
  signInEmail: "",
  signInPassword: "",
  confirmPassword: "",
};

const SignIn = () => {
  return (
    <div className="sign-in">
      <JoinUsForm
        type={type}
        passwordId="signInPassword"
        emailId="signInEmail"
        initialValues={initialValues}
        name=""
        password=""
        confirmPassword=""
      />
      <Link href="" className="joinus__text hover-grey">
        Forgot password?
      </Link>
    </div>
  );
};

export default SignIn;
