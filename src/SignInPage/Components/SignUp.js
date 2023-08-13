import JoinUsForm from "@/Reuseables/JoinUsForm";
import React from "react";
import * as Yup from "yup";
import { ref } from "yup";
import YupPassword from "yup-password";

const email = "Email";

const type = "SignUp";

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
  YupPassword(Yup);

  const validationSchema = Yup.object({
    [type + email]: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address."),

    username: Yup.string()
      .min(2, "Username must be between 2 and 16 characters.")
      .max(16, "Username must be between 2 and 16 characters.")
      .matches(
        /^[A-Za-z]+$/,
        "Spaces, Numbers and special characters are not allowed."
      )
      .required("Name is required"),

    SignUpPassword: Yup.string()
      .matches(/^\S*$/, "Whitespace is not allowed")
      .min(8, "password must contain 8 or more characters")
      .minLowercase(1, "password must contain at least 1 lower case letter")
      .minUppercase(1, "password must contain at least 1 upper case letter")
      .minNumbers(1, "password must contain at least 1 number")
      .minSymbols(1, "password must contain at least 1 special character")
      .required("password is required"),

    ConfirmPassword: Yup.string()
      .required("Please re-type your password")
      .oneOf([ref("SignUpPassword")], "Passwords does not match"),
  });

  return (
    <div className="sign-in">
      {" "}
      <JoinUsForm
        type={type}
        initialValues={initialValues}
        inputs={inputs}
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default SignUp;
