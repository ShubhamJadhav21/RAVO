import React, { useState } from "react";
import style from "./ReportAd.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import the stylesheet for toast

export default function ReportAd() {
  const [reportReason, setReportReason] = useState(""); 
  const [additionalInfo, setAdditionalInfo] = useState(""); 
  const navigate = useNavigate();

  const handleReportReasonChange = (event) => {
    setReportReason(event.target.value);
  };

  const handleAdditionalInfoChange = (event) => {
    setAdditionalInfo(event.target.value);
  };

  const close = () => {
    navigate('/');
  }

  const handleSendComplaint = () => {
    console.log("Selected report reason:", reportReason);
    console.log("Additional info:", additionalInfo);
    msg();
    setTimeout(() => {
        navigate('/')
    }, 1800);
     // Call the msg function when the complaint is sent successfully
  };

  function msg() {
    toast.success('Your complaint has been sent successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className={style.main_rpt}>
      <div className={style.wrapper_report}>
        <div className={style.close} onClick={close}>
          <span>
            <AiOutlineClose />
          </span>
        </div>
        <h1>Ad report</h1>

        <label>
          <input
            type="radio"
            name="reportReason"
            value="duplicate"
            checked={reportReason === "duplicate"}
            onChange={handleReportReasonChange}
          />
          Duplicate Ad
        </label>
        <label>
          <input
            type="radio"
            name="reportReason"
            value="offensive"
            checked={reportReason === "offensive"}
            onChange={handleReportReasonChange}
          />
          Offensive Content
        </label>

        <label>
          <input
            type="radio"
            name="reportReason"
            value="fraud"
            checked={reportReason === "fraud"}
            onChange={handleReportReasonChange}
          />
          Fraud
        </label>
        <div className={style.rpt_area}>
          <textarea
            name="report"
            id=""
            cols="30"
            rows="5"
            placeholder="Enter some extra info about report"
            value={additionalInfo}
            onChange={handleAdditionalInfoChange}
          ></textarea>
        </div>
        <button className={style.btn_rpt} onClick={handleSendComplaint}>
          Send complaint
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
