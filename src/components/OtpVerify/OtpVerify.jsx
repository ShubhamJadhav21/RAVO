import React, { useState } from "react";
import style from "./OtpVerify.module.css";
import { IoMdArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const mobile = location.state ? location.state.mobile : '';

  function goLogin() {
    navigate("/login");
  }

  const handleOtpChange = (e) => {
    // Allow only numeric input
    const numericValue = e.target.value.replace(/\D/g, "");
    setOtp(numericValue);
  };

  const isValidOtp = () => {
    return otp.length === 6;
  };

  const handleVerifyClick = () => {
    if (isValidOtp()) {
      fetch("https://book-gadi.onrender.com/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile, otp }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Server Response:", data);
          if (data.success) {
            console.log("OTP verification successful");
            alert("otp verification success");
          } else {
            console.log("OTP verification failed");
          }
        })
        .catch((error) => {
          console.error("Error verifying OTP:", error);
        });
    } else {
      console.log("Invalid OTP length");
    }
  };

  return (
    <div className={style.otpverify_wrapper}>
      <div className={style.back}>
        <IoMdArrowBack className={style.back_home} onClick={goLogin} />
      </div>

      <div className={style.content_wrapper}>
        <div className={style.cmp}>BookMyGaadi</div>
        <h2 className={style.code}>Enter Verification code</h2>
        <p className={style.inst}>
          We sent a 6-digit code to <span>+</span>
        </p>
        <input
          type="tel"
          pattern="[0-9]*"
          maxLength="6"
          className={style.otp_input}
          placeholder="Enter OTP"
          value={otp}
          onChange={handleOtpChange}
        />
        <button
          className={`${style.verify_btn} ${
            isValidOtp() ? style.enabled_verify_btn : ""
          }`}
          disabled={!isValidOtp()}
          onClick={handleVerifyClick}
        >
          Verify
        </button>
      </div>
    </div>
  );
}
