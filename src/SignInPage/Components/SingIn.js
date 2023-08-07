import React from "react";
import Form from "@/Reuseables/Form";
import Link from "next/link";

const type = "Sign in";

const SignIn = () => {
  return (
    <div className="sign-in">
      <Form type={type} />
      <Link href="" className="joinus__text">
        Forgot password?
      </Link>
    </div>
  );
};

export default SignIn;
