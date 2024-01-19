import React from 'react'
import style from './PcSkeleton.module.css'
export default function PcSkeleton() {
  return (
    <div className={style.pc_skl_wrapper}>
      <div className={style.pc_skeleton}>
        <div className={style.pc_skeleton_img}></div>
        <div className={style.pc_skeleton_chat}>
            <div className={style.pc_skeleton_name}></div>
            <div className={style.pc_skeleton_ct}></div>
        </div>
      </div>
      <div className={style.pc_skl_btm}>
        <div className={style.pc_skl_heading}></div>
      <div className={style.pc_skl_name}>
      
      
      </div>
      <div className={style.pc_skl_fuel}></div>
      </div>
    </div>
  )
}
