import React from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import style from "./PostAd.module.css";

export default function PostAd() {
  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className={style.postad}>
        <span onClick={navigateSignup}>post ad</span>
      </div>
      <div className={style.postad_mob} onClick={navigateSignup}>
        <span>
          <BsPlusCircle className={style.icon}/>
        </span>
        post ad
      </div>
    </>
  );
}
