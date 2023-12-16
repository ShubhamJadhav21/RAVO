import React, { useState } from "react";
import style from "./Login.module.css";
import googlelogo from "../../assets/googlelogo.jpg";
import { useNavigate } from "react-router";
export default function Login() {
  
  const [mobileNumber, setMobileNumber] = useState("");
 const navigate = useNavigate()
  function isValidMobileNumber() {
    const formattedNumber = mobileNumber.replace(/\D/g, ""); // Remove non-digit characters
    return formattedNumber.length === 10;
  }

  function handleNext() {
    if (isValidMobileNumber()) {
      console.log("Valid mobile number:", mobileNumber);

      fetch("http://localhost:3000/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobileNumber }),
      })
        .then(() => {
          console.log("OTP sent successfully");
          navigate("/verify-otp");
         
        })
        .catch((error) => {
          console.error("Error sending OTP:", error);
          // Handle the error or display a message to the user
        });
    } else {
      console.log("Invalid mobile number");
      // You can handle invalid mobile number case here
    }
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper_login}>
        <label htmlFor="num" className={style.mob}>
          Enter your mobile number
        </label>
        <div className={style.input_container}>
          <div className={style.country_code}>+91</div>
          <input
            type="text"
            maxLength={10}
            id="num"
            onChange={(e) => setMobileNumber(e.target.value)}
            value={mobileNumber}
            name="otpNo"
            className={style.otp_input}
            placeholder="Phone Number"
          />
        </div>
        <button
          onClick={handleNext}
          className={`${style.otp_btn} ${
            isValidMobileNumber() ? style.enabledBtn : ""
          }`}
          disabled={!isValidMobileNumber()}
        >
          Next
        </button>
        {/* 
        <div className={style.or}>or</div>
        <div className={style.login_google}>
          <img src={googlelogo} alt="googleLogo" />
          Continue with Google
        </div>
        */}
      </div>
    </div>
  );
}
