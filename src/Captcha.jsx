import React, { useEffect } from "react";



import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Captcha = ({ setcaptchaverified }) => {
  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const onSubmit = () => {
    const user_captcha = document.getElementById("user_input").value;

    if (validateCaptcha(user_captcha) === true) {
      setcaptchaverified(true);
    } else {
      alert("Invalid Captcha! Please Enter the Captcha again.");
      document.getElementById("user_input").value = "";
    }
  };

  return (
    <>
    <div>
      <div>
        <LoadCanvasTemplate />
      </div>
      <input
        type="text"
        placeholder="Enter Captcha"
        name="user_input"
        
      />
      <br/>
      <div className="ver_cap">
        <button onClick={onSubmit}>Verify Captcha</button>
      </div>
    </div>
    </>
  );
};

export default Captcha;
