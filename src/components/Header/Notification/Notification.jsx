import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import style from './Notification.module.css'
export default function Notifications() {
  return (
    <div>
      <div className={style.notifications}>
            <IoIosNotificationsOutline className={style.notify}/>
          </div>
    </div>
  )
}
