import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BsGoogle, BsGithub, BsFacebook } from "react-icons/bs";
import { signIn } from "next-auth/react";

const ContinueWith = ({ btns }) => {
  return (
    <div className="joinus__socials">
      <p className="joinus__continue"> Or continue with</p>
      <ul className="socials__list">
        {btns.map((btn) => {
          return btn.id !== "credentials" ? (
            <li
              className="socials__list--item"
              key={uuidv4()}
              onClick={async () => {
                const res = await signIn(btn.id, { callbackUrl: "/" });
              }}
            >
              {" "}
              <button className="socials-btn">
                {btn.name === "Google" && <BsGoogle id={btn.id} />}
                {btn.name === "GitHub" && <BsGithub id={btn.id} />}
                {btn.name === "Facebook" && <BsFacebook id={btn.id} />}
                Sign in with {btn.name}
              </button>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default ContinueWith;
