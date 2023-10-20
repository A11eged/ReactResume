import React from 'react';
import styles from './WorkCanvas.module.css';

export const NewWorkItem = (props) => {
  const SvgComponent = props.svg;
  return (
    <div className={styles.container}>
      <div className={styles.svgContainer}>
        <SvgComponent
          className={styles.svg}
          width={props.width}
          height={props.height}
          viewBox={props.viewBox}          
        />
      </div>
      <div className={styles.textBox}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}