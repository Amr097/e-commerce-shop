import { signIn } from "next-auth/react";
import axios from "axios";

const submitHandler = async (
  e,
  props,
  setIsLoading,
  setServerMessage,
  type,
  router,
  token
) => {
  setServerMessage({ type: null, message: "" });
  e.preventDefault();

  try {
    setIsLoading({ state: true });

    if (
      Object.keys(props.errors).length > 0 ||
      Object.values(props.values).includes("")
    ) {
      setIsLoading({ state: false });
      setServerMessage({
        type: "error",
        message: "Please correctly fill all the required fields.",
      });
      setIsLoading({ state: false });
    }
    ///////////////////////////////////////
    //////////////////////////////////////
    else if (type === "SignUp") {
      const { username, SignUpEmail, SignUpPassword } = props.values;

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXTATUH_URL}/api/auth/signup`,
        {
          name: username,
          email: SignUpEmail,
          password: SignUpPassword,
        }
      );
      setIsLoading({ state: true, message: res.data.message });
      setTimeout(() => {
        setIsLoading({ state: false, message: "" });
        setServerMessage({
          type: "success",
          message: res.data.message,
        });
      }, 1250);
    }
    ///////////////////////////////////////
    //////////////////////////////////////
    else if (type === "SignIn") {
      const { SignInEmail, SignInPassword } = props.values;
      let options = {
        redirect: false,
        email: SignInEmail,
        password: SignInPassword,
      };
      const res = await signIn("credentials", options);

      if (res.error) {
        setServerMessage({ type: "error", message: res.error });
        setIsLoading({ state: false, message: "" });
      } else {
        setIsLoading({ state: false, message: "" });
        //setIsLoading({ state: true, message: "Successfully signed in." });
        router.push("/");
        setTimeout(() => {
          setIsLoading({ state: false, message: "" });
        }, 1250);
      }
    }
    ///////////////////////////////////////
    //////////////////////////////////////
    else if (type === "ForgotPassword") {
      const { ForgotPasswordEmail } = props.values;

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXTATUH_URL}/api/auth/forget`,
        {
          email: ForgotPasswordEmail,
        }
      );
      setIsLoading({ state: true, message: "Success." });
      setTimeout(() => {
        setIsLoading({ state: false, message: "" });
        setServerMessage({
          type: "success",
          message: res.data.message,
        });
      }, 1250);
    }
    ///////////////////////////////////////
    //////////////////////////////////////
    else if (type === "Reset") {
      const { ResetPassword, ResetEmail } = props.values;
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_NEXTATUH_URL}/api/auth/reset`,
        {
          token: token,
          password: ResetPassword,
          email: ResetEmail,
        }
      );

      setIsLoading({ state: true, message: "Success." });
      setTimeout(() => {
        setIsLoading({ state: false, message: "" });
        setServerMessage({
          type: "success",
          message: res.data.message,
        });
        router.push("/joinus");
      }, 1250);
    }
  } catch (err) {
    const errorMessage = err.response.data.message
      ? err.response.data.message
      : "Common server error. Try again and it will work, In case the error presists please contact the developer to perform essential fixes.";

    console.log(err);
    setIsLoading({ state: false, message: "" });

    setServerMessage({ type: "error", message: errorMessage });
  }
};

export default submitHandler;
