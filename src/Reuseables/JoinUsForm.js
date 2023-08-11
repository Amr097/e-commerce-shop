import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { ref } from "yup";
import YupPassword from "yup-password";
import axios from "axios";
import FormInput from "./FormInput";
import CircleIconBtn from "./CircleIconBtn";

const JoinUsForm = ({ type, initialValues, inputs }) => {
  const [isLoading, setIsLoading] = useState(false);
  const submitHandler = async (e, props) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (type === "Sign up") {
        const { username, SignUpEmail, SignUpPassword } = props.values;
        await axios.post("/api/auth/signup", {
          name: username,
          email: SignUpEmail,
          password: SignUpPassword,
        });
        console.log(initialValues.username);
        console.log(props);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      props.values.message = err.data.response.message;
      console.log(err);
    }
  };

  YupPassword(Yup);

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(2, "Username must be between 2 and 16 characters.")
      .max(16, "Username must be between 2 and 16 characters.")
      .matches(
        /^[A-Za-z]+$/,
        "Spaces, Numbers and special characters are not allowed."
      )
      .required("Name is required"),
    SignInEmail: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address."),
    SignUpEmail: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address."),

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
    <>
      <div className="joinus__heading">
        <h1 className="heading-medium--black">{type}</h1>
        <p className="joinus__text joinus__text--heading">
          Get access to one of the best e-shopping services in the world.
        </p>
      </div>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form
            className="joinus__form"
            onSubmit={(e) => {
              submitHandler(e, props);
            }}
          >
            {inputs.map((item, index) => (
              <FormInput
                key={item.name + index}
                icon={item.icon}
                id={`${item.name}${type}`}
                name={item.name}
                type={item.type}
                className="joinus__input"
                placeholder={item.placeholder}
                autoComplete="on"
              />
            ))}

            <Link
              href=""
              className=" joinus__text joinus__text--forget hover-blue"
            >
              Forgot password?
            </Link>
            <CircleIconBtn type={type} isLoading={isLoading} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default JoinUsForm;
