import { useField } from "formik";
import React from "react";
import { SiMinutemailer } from "react-icons/si";
import { LiaKeySolid } from "react-icons/lia";
import { AiOutlineUser, AiOutlineEye } from "react-icons/ai";
import { Field } from "formik";

const FormInput = ({ icon, placeholder, id, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { error, touched } = meta;

  const showPassword = (e, inputId) => {
    const passwordInput = document.getElementById(inputId);

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordInput.value !== ""
        ? e.currentTarget.classList.toggle("reset-width")
        : null;
    } else {
      passwordInput.type = "password";
      passwordInput.value !== ""
        ? e.currentTarget.classList.toggle("reset-width")
        : null;
    }
  };

  return (
    <div
      className={
        error && touched
          ? "joinus__input--container flex input-error"
          : "joinus__input--container flex"
      }
    >
      {icon === "email" && <SiMinutemailer />}
      {icon === "password" && <LiaKeySolid />}
      {icon === "user" && <AiOutlineUser />}
      <Field placeholder={placeholder} id={id} {...props} {...field} />
      {icon === "password" && (
        <span className="show-icon" onClick={(e) => showPassword(e, id)}>
          {" "}
          <AiOutlineEye id="repeatPassword" />
        </span>
      )}
    </div>
  );
};

export default FormInput;
