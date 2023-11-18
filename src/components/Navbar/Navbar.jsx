import React from 'react'
import style from './Navbar.module.css'

import Mobile_view_header from '../Header/Mobile_view_header/Mobile_view_header'
import Navigation from '../Header/Navigation/Navigation'
// import VehicleComponent from '../VehicleComponent/VehicleComponent'
export default function Navbar() {
  
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
