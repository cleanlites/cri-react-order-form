import React, { useCallback, useContext, useEffect } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { AppContext } from "./AppContext";

const CaptchaToken = () => {
  const { setCaptchaToken } = useContext(AppContext);
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("verify");
    if (token) {
      setCaptchaToken(token);
    }
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);
  return null;
};
export const CaptchaProvider = ({ children }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LcfKHknAAAAAAPyoDgfyPkRKikS0WAMjRl-Sw78"
      language="english"
      scriptProps={{
        async: false, // optional, default to false,
        defer: false, // optional, default to false
        appendTo: "head", // optional, default to "head", can be "head" or "body",
        nonce: undefined, // optional, default undefined
      }}
    >
      <CaptchaToken />
      {children}
    </GoogleReCaptchaProvider>
  );
};
