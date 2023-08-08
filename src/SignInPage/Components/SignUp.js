import JoinUsForm from "@/Reuseables/JoinUsForm";
import React from "react";

const type = "Sign up";
const initialValues = {
  name: "",
  signUpEmail: "",
  signUpPassword: "",
  confirmPassword: "",
};

const SignUp = () => {
  return (
    <div className="sign-up">
      {" "}
      <JoinUsForm
        type={type}
        passwordId="signUpPassword"
        emailId="signUpEmail"
        initialValues={initialValues}
        name="name"
        password="signUpPassword"
        confirmPassword="confirmPassword"
      />
    </div>
  );
};

export default SignUp;
