// Mobile_view_header.jsx
import React, { useState } from "react";
import style from "./Mobile_view_header.module.css";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SearchBar from "../../SearchBar/SearchBar";
import Profilepanel from "../Profilepanel.jsx/Profilepanel";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router";

export default function Mobile_view_header({
  searchVehicle,
  setSearchVehicle,
  getVehicleInput,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearchBarClick = () => {
    setIsSearchBarClicked(true);
  };

  const handleSearchBarBlur = () => {
    setIsSearchBarClicked(false);
  };

  const navigateToLocation = () => {
    navigate("/location");
  };

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
            <span onClick={navigateToLocation}>India</span>
            <HiOutlineLocationMarker onClick={navigateToLocation}/>
          </div>
        </div>
        <div
          className={`${style.search_bar} ${
            isSearchBarClicked ? style.clicked : style.search_bar
          }`}
          onClick={handleSearchBarClick}
          onBlur={handleSearchBarBlur}
        >
          <span>
            <BiSearch className={style.search_icon} />
          </span>

          <SearchBar />
        </div>
        <div
          className={
            isMenuOpen
              ? `${style.side_bar} ${style.side_bar_open}`
              : style.side_bar
          }
        >
          <div className={style.close_icon}>
            <RxCross1 onClick={closeMenu} />
          </div>
          <Profilepanel closeMenu={closeMenu} />
        </div>
      </div>
    </>
  );
}
