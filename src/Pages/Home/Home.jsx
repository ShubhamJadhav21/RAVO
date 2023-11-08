import React from 'react'
import style from './Home.module.css'
import Header from '../../components/Header/Header/Header'
import Mobile_view_header from '../../components/Header/Mobile_view_header/Mobile_view_header'
import VehicleComponent from '../../components/VehicleComponent/VehicleComponent'
export default function Home() {
  return (
    <>
    <div className={style.home_wrapper}>
      <div className={style.other_screen_header}>
      <Header/>
      </div>
      <div className={style.mobile_view_header}>
        <Mobile_view_header/> 
       </div>
      
    </div>
    <VehicleComponent/>
    </>
  )
}
