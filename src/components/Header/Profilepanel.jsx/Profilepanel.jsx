import React from "react";
import Profile from "../Profile/Profile";
import { BiLogOut } from "react-icons/bi";
import style from "./Profilepanel.module.css";
import Chat from "../Chat/Chat";
import Notifications from "../Notification/Notification";
import PostAd from "../PostAd/PostAd";
export default function Profilepanel({closeMenu}) {
  return (
    <div className={style.wrapper}>
      <div className={style.profilepic}>
        <div className={style.profile}>
          <Profile />
        </div>
        <span>Shubham Jadhav</span>
      </div>
      <button className={style.btn}>View and edit profile</button>
      <hr />
      <div className={style.options}>
      <div className={style.postad} onClick={closeMenu}>
        <PostAd/>
      </div>
        <div className={style.chat}>
          <Chat className={style.chat_icon} />
          <span>Chat</span>
        </div>
        <div className={style.notification}>
          <Notifications className={style.notify_icon} />
          <span>Notifications</span>
        </div>
        <div className={style.logout}>
          <BiLogOut className={style.logout_icon} />
          <span>Logout</span>
        </div>

      </div>
    </div>
  );
}
