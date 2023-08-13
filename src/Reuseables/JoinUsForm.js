import { React, useState } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { ref } from "yup";
import YupPassword from "yup-password";
import axios from "axios";
import FormInput from "./FormInput";
import Loader from "./Loader";
import CircleIconBtn from "./CircleIconBtn";
import { IoIosClose } from "react-icons/io";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const JoinUsForm = ({ type, initialValues, inputs }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState({ state: false, message: "" });
  const [serverMessage, setServerMessage] = useState({
    type: null,
    message: "",
  });
  const submitHandler = async (e, props) => {
    setServerMessage({ type: null, message: "" });
    e.preventDefault();
    try {
      setIsLoading({ state: true });
      if (type === "Sign up") {
        const { username, SignUpEmail, SignUpPassword } = props.values;
        const res = await axios.post("/api/auth/signup", {
          name: username,
          email: SignUpEmail,
          password: SignUpPassword,
        });

        setIsLoading({ state: true, message: res.data.message });
        setTimeout(() => {
          setIsLoading({ state: false, message: "" });
        }, 1250);
        setServerMessage({
          type: "success",
          message: res.data.message,
        });
      }
      if (type === "Sign in") {
        console.log(props.values);
        const { SignInEmail, SignInPassword } = props.values;
        let options = {
          redirect: false,
          email: SignInEmail,
          password: SignInPassword,
        };
        const res = await signIn("credentials", options);
        if (res.error) {
          setServerMessage({
            type: "error",
            message: res.error,
          });
          setIsLoading({ state: false, message: "" });
        } else {
          setIsLoading({ state: true, message: "Successfully signed in." });
          setTimeout(() => {
            setIsLoading({ state: false, message: "" });
            router.push("/");
          }, 1250);
        }
      }
    } catch (err) {
      const errorMessage = err.response.data.message
        ? err.response.data.message
        : "An error occured.";
      setIsLoading({ state: false, message: "" });
      setServerMessage({ type: "error", errorMessage });
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
      {isLoading.state && <Loader loading={isLoading} />}
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
            <CircleIconBtn type={type} isLoading={isLoading.state} />
          </Form>
        )}
      </Formik>

      {serverMessage.type && (
        <span
          className={
            serverMessage.type === "error"
              ? "joinus__message--server  utils-show-error-server"
              : "joinus__message--server utils-show-success-server"
          }
        >
          {serverMessage.message}
          <IoIosClose
            className={"joinus__message--server-close"}
            onClick={() => {
              setServerMessage({ type: null, message: "" });
            }}
          />
        </span>
      )}
    </>
  );
};

export default JoinUsForm;
