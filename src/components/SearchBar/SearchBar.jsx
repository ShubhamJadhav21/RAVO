import React from "react";
import { BiSearch } from "react-icons/bi";
import style from "./SearchBar.module.css";

export default function SearchBar() {


  return (
    <div className={style.wrapper_searchbar} >
    
      <input
        type="text"
        placeholder="Search Car, Tempo, and more..."
        className={style.search_input}
      />
        <button title="Search">
        <BiSearch  className={style.search_icon}/>
      </button>
    </div>
  );
}
