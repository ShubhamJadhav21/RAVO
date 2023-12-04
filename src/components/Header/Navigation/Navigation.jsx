import React, { useState } from "react";
import style from "./Navigation.module.css";
import SearchBar from "../../SearchBar/SearchBar";
import { SlArrowDown } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import Profile from "../Profile/Profile";
import Chat from "../Chat/Chat";
import Notifications from "../Notification/Notification";
import Filter from "../Filter/Filter";
import PostAd from "../PostAd/PostAd";
import { TbCurrentLocation } from "react-icons/tb";
import UseCurrentLocation from "../../Location/UseCurrentLocation";

export default function Navigation() {
  const [locationHistory, setLocationHistory] = useState(false);
  function showLocationHistory() {
    setLocationHistory(true);
  }
  return (
    <div className={style.wrapper_header}>
      <div className={style.lft_content}>
        <div className={style.logo}>ravo</div>

        <div className={style.location}>
          <SearchBar
            placeholder="India"
            downArrowIcon={
              <SlArrowDown className={style.location_down_arrow}/>
            }
            searchIcon={<BiSearch />}
            downArrowStyle={style.location_down_arrow}
            wrapper_style={style.location_search}
            input_style={style.location_search_input}
            onClick={showLocationHistory}
          />
        </div>
        {locationHistory && (
          <div className={style.location_wrapper}>
            <div className={style.top}>
              <span className={style.location_icon}>
                <TbCurrentLocation />
              </span>
              <div>
                <div className={style.use_location}>
                  <div> Use current location</div>
                  <span>Location blocked.Check browser/phone settings.</span>
                </div>
              </div>
            </div>
            <hr className={style.line} />
            <div className={style.recent_locations}>
              <span>RECENT LOCATIONS</span>
              <UseCurrentLocation />
            </div>
          </div>
        )}

        <div className={style.search}>
          <SearchBar
            placeholder="Search Car Tempo and more..."
            wrapper_style={style.vehicle_search}
            input_style={style.vehicle_search_input}
            searchButtonIcon={{
              icon: <BiSearch />,
            }}
            btn_style={style.custom_btn}
          />
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
