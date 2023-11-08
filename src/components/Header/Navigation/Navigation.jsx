import React, { useState } from "react";
import style from "./Navigation.module.css";
import SearchBar from "../../SearchBar/SearchBar";
import { SlArrowDown } from "react-icons/sl";
import { HiOutlineMenu } from "react-icons/hi";
import Profile from "../Profile/Profile";
import Chat from "../Chat/Chat";
import Notifications from "../Notification/Notification";
import Filter from "../Filter/Filter";
import PostAd from "../PostAd/PostAd";

export default function Navigation() {
  return (
    <div className={style.wrapper_header}>
      <div className={style.lft_content}>
        <div className={style.logo}>ravo</div>

        <div className={style.search}>
          <SearchBar />
        </div>
      </div>

      <div className={style.rtl_content}>
        {/* <div className={style.language}>
          <span>ENGLISH</span>
          <button>
            <SlArrowDown className={style.down_arrow}/>
          </button>
        </div> */}

        <div className={style.filter} title="Filter location">
          <Filter />
        </div>
        
        <div className={style.chat} title="Chat">
          <Chat />
        </div>

        <div className={style.notifications} title="Notifications">
          <Notifications />
        </div>

        <div className={style.profile}>
          <Profile />

          <span>
            <SlArrowDown />
          </span>
        </div>
        
      </div>
      <div className={style.postad}>
        <PostAd />
      </div>
      
    </div>
  );
}
