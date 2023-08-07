import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { LiaKeySolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";

const Form = ({ type }) => {
  return (
    <>
      <div className="joinus__heading">
        <h1 className="heading-medium--black">{type}</h1>
        <p className="joinus__text">
          Get access to one of the best e-shopping services in the world.
        </p>
      </div>

      <form action="POST" className="joinus__form">
        {type === "Sign up" ? (
          <div className="joinus__input--container flex">
            <AiOutlineUser />
            <input
              type="email"
              className="joinus__input"
              placeholder="Full Name"
            />
          </div>
        ) : null}
        <div className="joinus__input--container flex">
          <SiMinutemailer />
          <input
            type="email"
            className="joinus__input"
            placeholder="Email Address"
          />
        </div>
        <div className="joinus__input--container flex">
          <LiaKeySolid />
          <input
            type="password"
            className="joinus__input"
            placeholder="Password"
          />
        </div>
        {type === "Sign up" ? (
          <div className="joinus__input--container flex">
            <LiaKeySolid />
            <input
              type="password"
              className="joinus__input"
              placeholder="Repeat Password"
            />
          </div>
        ) : null}
        <button className="joinus__btn flex">
          <p>{type}</p>{" "}
          <span className="arrow-in-circle">
            {" "}
            <FaArrowRight />{" "}
          </span>
        </button>
      </form>
    </>
  );
};

export default Form;
