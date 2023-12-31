import React from "react";
import JoinUsForm from "@/Reuseables/JoinUsForm";
import * as Yup from "yup";

const email = "Email";

const type = "SignIn";

const info = {
  heading: "Sign In",
  btnText: "Sign in",
  headingText:
    "Get access to one of the best e-shopping services in the world.",
};

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

const SignIn = ({ forgotPasswordState }) => {
  const validationSchema = Yup.object({
    [type.replace(/ /g, "") + email]: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address."),
  });

  return (
    <div className="sign-in">
      <JoinUsForm
        info={info}
        initialValues={initialValues}
        inputs={inputs}
        validationSchema={validationSchema}
        forgotPasswordState={forgotPasswordState}
        type={type}
      />
    </div>
  );
};

export default SignIn;
