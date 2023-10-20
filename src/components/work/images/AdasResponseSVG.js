import React from 'react';
import styles from './AdasResponseSVG.module.css';

export const AdasResponseSVG = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={55} height={60} {...props}>
      <path d="M5 30q0-20 22.5-20T50 30 27.5 50 5 30" />
      <path d="M10 30h35l-5-10H15Z" />
      <circle cx={15} cy={45} r={10} />
      <circle cx={40} cy={45} r={10} />
    </svg>
  )
}
