"use client";
import { React } from "react";
import JoinUsForm from "@/Reuseables/JoinUsForm";
import * as Yup from "yup";
import { ref } from "yup";
import YupPassword from "yup-password";
import "../../../SignInPage/JoinUsPage.scss";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const email = "Email";

const type = "Reset";

const info = {
  heading: "Reset Password",
  btnText: "Submit",
  headingText: "Please enter your email and new password.",
};

const initialValues = {
  ResetEmail: "",
  ResetPassword: "",
  ConfirmResetPassword: "",
};

const inputs = [
  {
    name: "ResetEmail",
    placeholder: "Enter your email.",
    type: "text",
    icon: "email",
  },
  {
    name: "ResetPassword",
    placeholder: "Enter your password.",
    type: "password",
    icon: "password",
  },
  {
    name: "ConfirmResetPassword",
    placeholder: "Re-type your password.",
    type: "password",
    icon: "password",
  },
];

const Reset = ({ params }) => {
  YupPassword(Yup);

  const { token } = params;

  const validationSchema = Yup.object({
    [type.replace(/ /g, "") + email]: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address."),
    ResetPassword: Yup.string()
      .matches(/^\S*$/, "Whitespace is not allowed")
      .min(8, "password must contain 8 or more characters")
      .minLowercase(1, "password must contain at least 1 lower case letter")
      .minUppercase(1, "password must contain at least 1 upper case letter")
      .minNumbers(1, "password must contain at least 1 number")
      .minSymbols(1, "password must contain at least 1 special character")
      .required("password is required"),

    ConfirmResetPassword: Yup.string()
      .required("Please re-type your password")
      .oneOf([ref("ResetPassword")], "Passwords does not match"),
  });

  return (
    <div className="reset-page-container">
      <p className="reset__back">
        <span className="arrow-in-circle">
          {" "}
          <FaArrowLeft />{" "}
        </span>
        Reset your password ?<Link href="">Back to Sign in page</Link>
      </p>
      <div className="reset">
        <div className="sign-in">
          <JoinUsForm
            info={info}
            initialValues={initialValues}
            inputs={inputs}
            validationSchema={validationSchema}
            forgotPasswordState={{
              forgotPassword: true,
              setForgotPassword: () => {},
            }}
            type={type}
            token={token}
          />
        </div>
      </div>
    </div>
  );
};

export default Reset;
