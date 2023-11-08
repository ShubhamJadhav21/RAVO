import React from 'react'
import profileimg from '../../assets/profileimg.png'
import style from './Menu.module.css'
export default function Menu({isOpen,toggleMenu}) {
  return (
    <div className={`${style.menuContainer} ${isOpen ? style.open : ''}`}>
      <div className={style.view_profile}>
      <img src={profileimg} alt="profile pic" /> 
      </div>
    </div>
  )
}
