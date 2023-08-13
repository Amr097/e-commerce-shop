import React from "react";
import JoinUsForm from "@/Reuseables/JoinUsForm";
import * as Yup from "yup";

const email = "Email";

const type = "SignIn";
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
  const validationSchema = Yup.object({
    [type + email]: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address."),
  });

  return (
    <div className="sign-in">
      <JoinUsForm
        type={type}
        initialValues={initialValues}
        inputs={inputs}
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default SignIn;
