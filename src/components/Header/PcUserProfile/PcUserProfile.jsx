import React from "react";
import Profile from "../Profile/Profile";
import { BiLogOut } from "react-icons/bi";
import style from './PcUserProfile.module.css';
import { useNavigate } from "react-router";

export default function PcUserProfile({ closeUserProfile }) {
  const navigate = useNavigate()
  function Login(){
    navigate("/login")
  }
  return (
    <div className={style.wrapper}>
      <div className={style.profilepic}>
        <div className={style.profile}>
          <Profile />
        </div>
        <span>Shubham Jadhav</span>
      </div>
      <button className={style.btn} onClick={Login}>Login</button>
      <div className={style.logout} onClick={closeUserProfile}>
        <BiLogOut className={style.logout_icon} />
        <span>Logout</span>
      </div>
    </div>
  );
}
