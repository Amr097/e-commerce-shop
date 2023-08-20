import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { BsFillCheckCircleFill } from "react-icons/bs";

const NewsLoader = ({ loading }) => {
  const { state, message } = loading;

  return (
    <div className="clip-loader">
      {!message && <ClipLoader color="#ffff" loading={state} />}
      {message && (
        <div>
          <BsFillCheckCircleFill /> {message}
        </div>
      )}
    </div>
  );
};

export default NewsLoader;
