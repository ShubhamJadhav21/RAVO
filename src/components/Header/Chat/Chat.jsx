import React from "react";
import { BsChatText } from "react-icons/bs";
import style from "./Chat.module.css";
export default function Chat() {
  return (
    <div>
      <div className={style.chat}>
        <BsChatText className={style.chat_icon}/>
      </div>
      
    </div>
  );
}
