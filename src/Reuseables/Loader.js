import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaSkullCrossbones } from "react-icons/fa";

const Loader = ({ loading }) => {
  const { state, message, type } = loading;

  return (
    <div className="loader">
      <HashLoader color="#0a0a0a" loading={state} />
      {message && (
        <div
          className={
            type === "error"
              ? "utils-server-error-message"
              : "utils-server-success-message"
          }
        >
          {type === "error" ? <FaSkullCrossbones /> : <BsFillCheckCircleFill />}{" "}
          {message}
        </div>
      )}
    </div>
  );
};

export default Loader;
