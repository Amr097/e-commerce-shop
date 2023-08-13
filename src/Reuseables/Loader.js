import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Loader = ({ loading }) => {
  const { state, message } = loading;
  console.log(state, message);
  return (
    <div className="loader">
      <HashLoader color="#0a0a0a" loading={state} />
      {message && (
        <div className="utils-server-success-message">
          <BsFillCheckCircleFill /> {message}
        </div>
      )}
    </div>
  );
};

export default Loader;
