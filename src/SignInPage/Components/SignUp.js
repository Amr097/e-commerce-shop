import Form from "@/Reuseables/Form";
import React from "react";

const type = "Sign up";

const SignUp = () => {
  return (
    <div className="sign-up">
      {" "}
      <Form type={type} />
    </div>
  );
};

export default SignUp;
