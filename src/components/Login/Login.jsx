import React, { useState } from "react";
import style from "./Login.module.css";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

export default function Login() {
  const [mobile, setMobileNumber] = useState("");
  const navigate = useNavigate();

  function Home() {
    navigate("/");
  }

  function isValidMobileNumber() {
    const formattedNumber = mobile.replace(/\D/g, "");
    return formattedNumber.length === 10;
  }

  function handleNext() {
    if (isValidMobileNumber()) {
      console.log("Valid mobile number:", mobile);
  
      fetch("https://book-gadi.onrender.com/requestOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile }),
      })
        .then(() => {
          console.log("OTP sent successfully");
          navigate("/verify-otp", { state: { mobile:mobile } }); // Pass mobile as state
        })
        .catch((error) => {
          console.error("Error sending OTP:", error);
          // Handle the error or display a message to the user
        });
    } else {
      console.log("Invalid mobile number");
      // You can handle an invalid mobile number case here
    }
  }
  

  return (
    <div className={style.login_wrapper}>
      <div className={style.back}>
        <IoMdArrowBack className={style.back_home} onClick={Home} />
      </div>
      <div className={style.cmp}>BookMyGaadi</div>
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
              onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
              value={mobile}
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
        </div>
      </div>
    </div>
  );
}
