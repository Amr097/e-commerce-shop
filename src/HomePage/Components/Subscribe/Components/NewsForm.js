import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { useFormik } from "formik";
import * as Yup from "yup";
import NewsLoader from "@/Reuseables/NewsLoader";
import { useState } from "react";

const NewsForm = () => {
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState("");

  const validationSchema = Yup.object({
    newsEmail: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address."),
  });

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: { newsEmail: "" },
    validationSchema,
  });

  return (
    <form
      action="POST"
      className="newsletter__form "
      onSubmit={(e) => {
        e.preventDefault();
        setError("");
        if (errors.newsEmail) {
          setLoading({ state: true });
          setLoading((prev) => {
            return { ...prev, state: false };
          });
          return;
        } else if (!values.newsEmail) {
          console.log("hi");
          setTimeout(() => {
            setError("Email cannot be empty.");
            setLoading({ state: false });
            return;
          }, 500);
        } else {
          setLoading({ state: true });

          setTimeout(
            () => {
              setLoading((prev) => {
                return { ...prev, message: "Subscribed" };
              });
            },

            1250
          );
        }
      }}
    >
      <div
        className={
          errors.newsEmail || error
            ? "newsletter__inputbox input-error-border"
            : "newsletter__inputbox"
        }
      >
        <HiOutlineMail />

        <input
          type="text"
          id="newsEmail"
          spellCheck="false"
          placeholder="Enter your email"
          className="newsletter__input "
          value={values.newsEmail}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <button type="submit" className="newsletter__btn">
        {loading.state ? <NewsLoader loading={loading} /> : "Subscribe"}
      </button>
      {(errors.newsEmail || error) && (
        <div className="error-message-news">
          <span></span>
          {errors.newsEmail ? errors.newsEmail : error}
        </div>
      )}
    </form>
  );
};

export default NewsForm;
