import React, { useState } from "react";
import style from "./OtpVerify.module.css";
import { IoMdArrowBack } from "react-icons/io";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e) => {
    // Allow only numeric input
    const numericValue = e.target.value.replace(/\D/g, '');
    setOtp(numericValue);
  };

  const isValidOtp = () => {
    // Implement your OTP validation logic here
    // For example, you might want to check if the OTP is 6 characters long
    return otp.length === 6;
  };

  const handleVerifyClick = () => {
    // Implement your OTP verification logic here
    console.log("Verifying OTP:", otp);
  };

  return (
    <div className={style.otpverify_wrapper}>
       <div className={style.back}><IoMdArrowBack className={style.back_home}/></div>
       
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
