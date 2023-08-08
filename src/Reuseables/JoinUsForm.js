import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { LiaKeySolid } from "react-icons/lia";
import { AiOutlineUser, AiOutlineEye } from "react-icons/ai";
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";
import { ref } from "yup";

const JoinUsForm = ({
  type,
  passwordId,
  emailId,
  initialValues,
  name,
  password,
  confirmPassword,
}) => {
  const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };
  const validationSchema = Yup.object({
    [name]: Yup.string().required("Name is required"),
    [emailId]: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address."),

    [password]: Yup.string()
      .required("Please enter a password")
      .min(8, "Password must have at least 8 characters")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),

    [confirmPassword]: Yup.string()
      .required("Please re-type your password")
      .oneOf([ref("signUpPassword")], "Passwords does not match"),
  });

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema: validationSchema,
  });

  const showPassword = (inputId) => {
    const passwordInput = document.getElementById(inputId);

    passwordInput.type === "password"
      ? (passwordInput.type = "text")
      : (passwordInput.type = "password");
  };

  console.log(errors);

  return (
    <>
      <div className="joinus__heading">
        <h1 className="heading-medium--black">{type}</h1>
        <p className="joinus__text">
          Get access to one of the best e-shopping services in the world.
        </p>
      </div>

      <Formik
        enableReinitialize
        initialValues={{
          name: "",
          signUpEmail: "",
          signInEmail: "",
          signUpPassword: "",
          signInPassword: "",
          confirmPassword: "",
        }}
      >
        <Form className="joinus__form" onSubmit={handleSubmit}>
          {type === "Sign up" ? (
            <div className="joinus__input--container flex">
              <AiOutlineUser />
              <input
                id="name"
                type="text"
                className="joinus__input"
                placeholder="Full Name"
                autoComplete="on"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
              />
            </div>
          ) : null}
          <div className="joinus__input--container flex">
            <SiMinutemailer />
            <input
              id={emailId}
              type="email"
              className="joinus__input"
              placeholder="Email Address"
              autoComplete="on"
              onChange={handleChange}
              value={
                emailId === "signInEmail"
                  ? values.signInEmail
                  : values.signUpEmail
              }
              onBlur={handleBlur}
            />
          </div>
          <div className="joinus__input--container flex">
            <LiaKeySolid />
            <input
              id={passwordId}
              type="password"
              className="joinus__input"
              placeholder="Password"
              autoComplete="on"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            <AiOutlineEye
              className="show-icon"
              onClick={() => showPassword(passwordId)}
            />
          </div>
          {type === "Sign up" ? (
            <div className="joinus__input--container flex">
              <LiaKeySolid />
              <input
                id="confirmPassword"
                type="password"
                className="joinus__input"
                placeholder="Confirm Password"
                autoComplete="on"
                onChange={handleChange}
                value={values.confirmPassword}
                onBlur={handleBlur}
              />
              <AiOutlineEye
                id="repeatPassword"
                className="show-icon"
                onClick={() => showPassword("confirmPassword")}
              />
            </div>
          ) : null}
          <button type="submit" className="joinus__btn flex">
            <p>{type}</p>{" "}
            <span className="arrow-in-circle">
              {" "}
              <FaArrowRight />{" "}
            </span>
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default JoinUsForm;
