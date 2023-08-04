import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

const AccountMenu = () => {
  return (
    <button className="services-btn">
      {" "}
      <img src="/images/pngwing.com (2).png" alt="" /> &nbsp;
      <p>Account</p>
      <RiArrowDropDownFill />
      <div className="services-btn--dropdown">
        <ul>
          {["Men", "Women", "Children"].map((item) => (
            <li key={uuidv4()}>
              <a href="">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
};

export default AccountMenu;
