import React from 'react'
import style from './Header.module.css'
import Mobile_view_header from '../Mobile_view_header/Mobile_view_header'
import Navigation from '../Navigation/Navigation'
export default function Header() {
  return (
    <div className={style.home_wrapper}>
      <div className={style.other_screen_header}>
      <Navigation/>
      </div>
      <div className={style.mobile_view_header}>
        <Mobile_view_header/>
      </div>
    </div>
  )
}
