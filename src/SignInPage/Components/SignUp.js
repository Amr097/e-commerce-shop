import JoinUsForm from "@/Reuseables/JoinUsForm";
import React from "react";

const type = "Sign up";
const initialValues = {
  username: "",
  SignUpEmail: "",
  SignUpPassword: "",
  ConfirmPassword: "",
};

const inputs = [
  {
    name: "username",
    placeholder: "Enter your name.",
    type: "text",
    icon: "user",
  },
  {
    name: "SignUpEmail",
    placeholder: "Enter your email.",
    type: "text",
    icon: "email",
  },
  {
    name: "SignUpPassword",
    placeholder: "Enter your password.",
    type: "password",
    icon: "password",
  },
  {
    name: "ConfirmPassword",
    placeholder: "Re-type your password.",
    type: "password",
    icon: "password",
  },
];

const SignUp = () => {
  return (
    <div className="sign-in">
      {" "}
      <JoinUsForm type={type} initialValues={initialValues} inputs={inputs} />
    </div>
  );
};

export default SignUp;
