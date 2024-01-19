import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import style from './Loader.module.css';

export default function Loader() {
  return (
    <div className={style.loader_wrapper}>
      <PulseLoader color="#219de2" />
    </div>
  );
}
