import React, { useState } from "react";
import style from "./Location.module.css";
import { BiSearch } from "react-icons/bi";
import SearchBar from "../SearchBar/SearchBar";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { RxCross1 } from "react-icons/rx";
import { TbCurrentLocation } from "react-icons/tb";
import UseCurrentLocation from "./UseCurrentLocation";

export default function Location() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  function backHome() {
    navigate("/");
  }

  function handleSearchInputChange(e) {
    setSearchValue(e.target.value);
  }

  function clearSearch() {
    setSearchValue("");
  }

  return (
    <div className={style.location}>
      <div className={style.back}>
        <span className={style.back_arrow}>
          <HiOutlineArrowLeft onClick={backHome} />
        </span>
        <span className={style.location_text}>LOCATION</span>
      </div>
      <SearchBar
        placeholder="Search town, area or locality"
        searchIcon={<BiSearch />}
        wrapper_style={style.location_search}
        input_style={style.location_search_input}
        value={searchValue}
        onChange={handleSearchInputChange}
        clearInputIcon={<RxCross1 />}
        clear_style={style.clear_icon}
        clearInputFunction={clearSearch}
      />
      <div className={style.current_location}>
        <div className={style.top}>
          <span className={style.location_icon}>
            <TbCurrentLocation />
          </span>
          <div>
            <div className={style.use_location}>
             <div> Use current location</div>
              <span>
                Location blocked.Check browser/phone settings.
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr  className={style.line}/>
      <div className={style.recent_locations}>
        <span>RECENT LOCATIONS</span>
        <UseCurrentLocation/>
      </div>
    </div>
  );
}
