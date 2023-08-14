import JoinUsForm from "@/Reuseables/JoinUsForm";
import React from "react";
import * as Yup from "yup";

const email = "Email";

const type = "ForgotPassword";

const info = {
  heading: "Forgot Password",
  btnText: "Submit",
  headingText:
    "Enter the email associated with your account to change your password.",
};

const initialValues = {
  ForgotPasswordEmail: "",
};

const inputs = [
  {
    name: "ForgotPasswordEmail",
    placeholder: "Enter your email.",
    type: "text",
    icon: "email",
  },
];

const ForgotPassword = ({ forgotPasswordState }) => {
  const validationSchema = Yup.object({
    [type + email]: Yup.string()
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
        type={type}
        forgotPasswordState={forgotPasswordState}
      />
    </div>
  );
};

export default ForgotPassword;
