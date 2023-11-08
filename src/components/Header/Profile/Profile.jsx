import React, { useState } from "react";
import profileimg from "../../../assets/profileimg.png";
import { SlArrowDown } from "react-icons/sl";
import style from "./Profile.module.css";
import PcUserProfile from "../PcUserProfile/PcUserProfile";

export default function Profile() {
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

  const toggleUserProfile = () => {
    setIsUserProfileOpen(!isUserProfileOpen);
  };
  
  const closeUserProfile = () => {
    setIsUserProfileOpen(false);
  }

  return (
    <div>
      <div className={style.profile} onClick={toggleUserProfile}>
        <img src={profileimg} alt="profile pic" />
        <span>
          <SlArrowDown/>
        </span>
      </div>

      {isUserProfileOpen ? (
        <div className={style.pcUserProfile_wrapper} onClick={closeUserProfile}>
          <PcUserProfile/>
        </div>
      ) : null}
    </div>
  );
}
