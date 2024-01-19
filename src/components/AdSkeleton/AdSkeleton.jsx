import React from 'react'
import style from './AdSkeleton.module.css'
export default function AdSkeleton() {
  return (
    <div className={style.ad_sk}>
      <div className={style.ad_img}></div>
      <span className={style.ad_name}></span>
      <span className={style.ad_owner}></span>
      <div className={style.ad_location}>
      </div>
    </div>
  )
}
