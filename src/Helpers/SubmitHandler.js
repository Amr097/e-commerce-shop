import { signIn } from "next-auth/react";
import axios from "axios";

const submitHandler = async (
  e,
  props,
  setIsLoading,
  setServerMessage,
  type,
  router
) => {
  setServerMessage({ type: null, message: "" });
  e.preventDefault();
  try {
    setIsLoading({ state: true });
    if (type === "Sign up") {
      const { username, SignUpEmail, SignUpPassword } = props.values;
      const res = await axios.post("/api/auth/signup", {
        name: username,
        email: SignUpEmail,
        password: SignUpPassword,
      });

      setIsLoading({ state: true, message: res.data.message });
      setTimeout(() => {
        setIsLoading({ state: false, message: "" });
      }, 1250);
      setServerMessage({
        type: "success",
        message: res.data.message,
      });
    }
    if (type === "Sign in") {
      const { SignInEmail, SignInPassword } = props.values;
      let options = {
        redirect: false,
        email: SignInEmail,
        password: SignInPassword,
      };
      const res = await signIn("credentials", options);
      if (res.error) {
        setServerMessage({
          type: "error",
          message: res.error,
        });
        setIsLoading({ state: false, message: "" });
      } else {
        setIsLoading({ state: true, message: "Successfully signed in." });
        router.push("/");
        setTimeout(() => {
          setIsLoading({ state: false, message: "" });
        }, 1250);
      }
    }
  } catch (err) {
    const errorMessage = err.response.data.message
      ? err.response.data.message
      : "An error occured.";
    console.log(errorMessage);
    setIsLoading({ state: false, message: "" });
    setServerMessage({ type: "error", errorMessage });
  }
};

export default submitHandler;
