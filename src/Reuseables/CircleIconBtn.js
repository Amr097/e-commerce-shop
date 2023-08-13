import { React } from "react";
import { FaArrowRight } from "react-icons/fa";

const CircleIconBtn = ({ type, isLoading }) => {
  return (
    <button disabled={isLoading} type="submit" className="circle-icon-btn flex">
      <p>{type}</p>{" "}
      <span className="arrow-in-circle">
        {" "}
        <FaArrowRight />{" "}
      </span>
    </button>
  );
};

export default CircleIconBtn;
