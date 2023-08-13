import { React, useState } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import FormInput from "./FormInput";
import Loader from "./Loader";
import CircleIconBtn from "./CircleIconBtn";
import { IoIosClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import submitHandler from "@/Helpers/SubmitHandler";

const JoinUsForm = ({ type, initialValues, inputs, validationSchema }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState({ state: false, message: "" });
  const [serverMessage, setServerMessage] = useState({
    type: null,
    message: "",
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
              submitHandler(
                e,
                props,
                setIsLoading,
                setServerMessage,
                type,
                router
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
