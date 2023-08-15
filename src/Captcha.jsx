import React, { Component } from "react";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  // LoadCanvasTemplateNoReload,
  validateCaptcha
} from "react-simple-captcha";



class CaptchaTest extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    loadCaptchaEnginge(5);
  }

  submit = () => {
    let user_captcha = document.getElementById("user_input").value;

    if (validateCaptcha(user_captcha) === true) {


      this.props.setcaptchaverified(true)

    } else {
      alert("Invalid Captcha Please Enter carefully.");
      document.getElementById("user_input").value = "";
    }
  };

  render() {
    return (
      <div>

        <div>
          <LoadCanvasTemplate />
        </div>

        <input
          type="text"
          placeholder="Enter Captcha"
          id="user_input"
          name="user_input"

        ></input>
        <div className="ver_cap">
          <button onClick={() => this.submit()} >
            Verify Captcha
          </button>
        </div>
      </div>
    );
  }
}
export default CaptchaTest;