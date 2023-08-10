import React from "react";
import JoinUsForm from "@/Reuseables/JoinUsForm";

const type = "Sign in";
const initialValues = {
  SignInEmail: "",
  SignInPassword: "",
};

const inputs = [
  {
    name: "SignInEmail",
    placeholder: "Enter your email.",
    type: "text",
    icon: "email",
  },
  {
    name: "SignInPassword",
    placeholder: "Enter your password.",
    type: "password",
    icon: "password",
  },
];

const SignIn = () => {
  return (
    <div className="sign-in">
      <JoinUsForm type={type} initialValues={initialValues} inputs={inputs} />
    </div>
  );
};

export default SignIn;
