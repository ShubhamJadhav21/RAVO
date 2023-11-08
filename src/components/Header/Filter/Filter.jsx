import React from 'react'
import {IoFilter} from 'react-icons/io5'
import style from './Filter.module.css'

export default function Filter() {
  return (
    <div className={style.wrapper}>
      <span><IoFilter className={style.filter_icon}/></span>
    </div>
  )
}
