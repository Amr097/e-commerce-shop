import { signIn } from "next-auth/react";
import axios from "axios";
import { object } from "yup";

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
    if (type === "SignUp") {
      const { username, SignUpEmail, SignUpPassword } = props.values;
      console.log(Object.keys(props.errors));
      if (Object.keys(props.errors).length === 0) {
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
      } else {
        setIsLoading({ state: false });
        setServerMessage({
          type: "error",
          message: "Please correctly fill all the required fields.",
        });
      }
    }
    if (type === "SignIn") {
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
    setIsLoading({ state: false, message: "" });

    setServerMessage({ type: "error", message: errorMessage });
  }
};

export default submitHandler;
