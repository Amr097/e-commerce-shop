import { ErrorMessage, useField } from "formik";
import React from "react";
import { SiMinutemailer } from "react-icons/si";
import { LiaKeySolid } from "react-icons/lia";
import { AiOutlineUser, AiOutlineEye } from "react-icons/ai";
import { Field } from "formik";
import { ShowPassword } from "@/Helpers/ShowPassword";
import { useState } from "react";

const FormInput = ({ icon, placeholder, id, type, ...props }) => {
  const [field, meta] = useField(props);
  const { error, touched } = meta;
  const [inputType, setInputType] = useState(type);

  return (
    <>
      {error && touched && (
        <div className="error-message">
          <span></span>
          <ErrorMessage name={field.name} />
        </div>
      )}
      <div
        className={
          error && touched
            ? "joinus__input--container flex input-error color-white"
            : "joinus__input--container flex"
        }
      >
        {icon === "email" && <SiMinutemailer />}
        {icon === "password" && <LiaKeySolid />}
        {icon === "user" && <AiOutlineUser />}
        <Field
          placeholder={placeholder}
          id={id}
          type={inputType}
          {...props}
          {...field}
        />
        {icon === "password" && (
          <span
            className={
              error && touched ? "show-icon before-color-red" : "show-icon"
            }
            onClick={(e) => ShowPassword(e, id, setInputType)}
          >
            {" "}
            <AiOutlineEye id="repeatPassword" />
          </span>
        )}
      </div>
    </>
  );
};

export default FormInput;
