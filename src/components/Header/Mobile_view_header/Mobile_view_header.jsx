import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi"; 
import {RxCross1} from 'react-icons/rx'
import style from "./Mobile_view_header.module.css";
import Filter from "../Filter/Filter";
import SearchBar from "../../SearchBar/SearchBar";
import Profile from "../Profile/Profile"
import Profilepanel from "../Profilepanel.jsx/Profilepanel";

export default function Mobile_view_header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu= () =>{
    setIsMenuOpen(false)
  }

  return (
    <>
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.lft_content}>
          <div className={style.hamburger_menu}>
            <HiOutlineMenu
              className={style.hamburger_icon}
              onClick={toggleMenu}
            />
          </div>
          <div className={style.logo}>ravo</div>
        </div>
        <div className={style.rtl_content}>
          <Filter />
        </div>
      </div>
      <div className={style.search_bar}>
        <SearchBar />
      </div>
      <div
        className={
          isMenuOpen
            ? `${style.side_bar} ${style.side_bar_open}`
            : style.side_bar
        }
      >
        <div className={style.close_icon}><RxCross1 onClick={closeMenu}/></div>
        <Profilepanel closeMenu={closeMenu}/>
      </div>
      </div>
    </>
  );
}
