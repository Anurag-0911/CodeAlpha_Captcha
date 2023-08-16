import React, { useEffect }from "react";
import "./App.css";
import { useState } from "react";
import Captcha from "./Captcha";



export default function App() {
  const [formsubmitted, setformsubmitted] = useState(false);
  const [captchaverified, setcaptchaverified] = useState(false);
  useEffect(() => {
  }, [captchaverified]);

  const final_submit = () => {
    setformsubmitted(true);
  };

  if (formsubmitted) {
    return (
      <>
        <h1 className="container_l">Signing In Completed,<br/>Thank You</h1>
      </>
    );
  }

  return (
    <>

      <div className="container">
        <h1 className="signup">SIGN IN</h1>

        <input type="text" placeholder="Enter Name" required />
        <input type="text" placeholder="Enter email" required />
        <input type="password" placeholder="Enter Password" required />
        <input type="password" placeholder="Confirm password" required />
        <br></br>
        {captchaverified && (
          <button onClick={() => final_submit()} className="cnf_sbmt">
            Submit
          </button>
        )}
        {!captchaverified && (
          <>
            <Captcha setcaptchaverified={setcaptchaverified} />
            <br />
            
         </>
        )}
      </div>
    </>
  );
}




