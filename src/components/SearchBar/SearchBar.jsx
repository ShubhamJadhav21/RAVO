import React from "react";
import style from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";

export default function SearchBar({
  placeholder,
  downArrowIcon,
  searchButtonIcon,
  wrapper_style,
  input_style,
  btn_style,
  down_arrow_style,
  searchIcon,
  onClick,
  
  clearInputIcon,
  clear_style,
  clearInputFunction,
}) {
  return (
    <div className={wrapper_style}>
      {searchIcon && <span className={style.search_icon}>{searchIcon}</span>}
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className={input_style}
        onClick={onClick}
        
      />
      {searchButtonIcon && (
        <button
          title="Search"
          className={btn_style}
          onClick={searchButtonIcon.onClick}
        >
          {searchButtonIcon.icon}
        </button>
      )}
      {/* {value.length > 0 && (
        <span className={clear_style} onClick={clearInputFunction}>
          {clearInputIcon}
        </span>
      )} */}
      {downArrowIcon && (
        <span className={down_arrow_style}>{downArrowIcon}</span>
      )}
    </div>
  );
}
