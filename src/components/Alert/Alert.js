  
import React from 'react';
import style from './Alert.module.css';

export default function Alert({ message }) {
  return (
    <div className={style.container}>
      <p className={style.text}>{message}</p>
    </div>
  );
}