import React from 'react'
import { MdOutlineNotificationsNone } from "react-icons/md";
import style from './Notification.module.css'
export default function Notifications() {
  return (
    <div>
      <div className={style.notifications}>
            <MdOutlineNotificationsNone className={style.notify}/>
          </div>
    </div>
  )
}
