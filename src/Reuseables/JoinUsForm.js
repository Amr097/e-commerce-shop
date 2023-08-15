import { React, useState } from "react";
import { Formik, Form } from "formik";
import FormInput from "./FormInput";
import Loader from "./Loader";
import CircleIconBtn from "./CircleIconBtn";
import { IoIosClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import submitHandler from "@/Helpers/SubmitHandler";

const JoinUsForm = ({
  info,
  initialValues,
  inputs,
  validationSchema,
  forgotPasswordState,
  type,
  token,
}) => {
  const router = useRouter();

  const { forgotPassword, setForgotPassword } = forgotPasswordState;

  const [isLoading, setIsLoading] = useState({ state: false, message: "" });
  const [serverMessage, setServerMessage] = useState({
    type: null,
    message: "",
  });

  return (
    <>
      {isLoading.state && <Loader loading={isLoading} />}
      <div className="joinus__heading">
        <h1 className="heading-medium--black">{info.heading}</h1>
        <p className="joinus__text joinus__text--heading">{info.headingText}</p>
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
              submitHandler(
                e,
                props,
                setIsLoading,
                setServerMessage,
                type,
                router,
                token
              );
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

            {!forgotPassword && (
              <a
                onClick={() => {
                  setForgotPassword(true);
                }}
                className=" joinus__text joinus__text--forget hover-blue"
              >
                Forgot password?
              </a>
            )}
            <CircleIconBtn type={info.btnText} isLoading={isLoading.state} />
          </Form>
        )}
      </Formik>

      {
        <span
          className={
            "joinus__message--server" +
            (serverMessage.type === "error"
              ? " utils-show-error-server"
              : serverMessage.type === "success"
              ? " utils-show-success-server"
              : "")
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
      }
    </>
  );
};

export default JoinUsForm;
