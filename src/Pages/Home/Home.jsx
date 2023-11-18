import React from 'react'
import style from './Home.module.css'
import VehicleComponent from '../../components/VehicleComponent/VehicleComponent'
import Navbar from '../../components/Navbar/Navbar'

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar/>
      <VehicleComponent/>
      
    </div>
  )
}
