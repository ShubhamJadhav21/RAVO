import React from "react";
import { BsChat } from "react-icons/bs";
import style from "./Chat.module.css";
export default function Chat() {
  return (
    <div>
      <div className={style.chat}>
        <BsChat className={style.chat_icon}/>
      </div>
    </div>
  );
}
