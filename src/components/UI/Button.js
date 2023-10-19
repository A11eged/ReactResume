import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={styles.Button}
      onClick={props.onClick}
      style={{
        height: props.height,
        width: props.width,
        fontSize: props.fontSize,
        color: props.color,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
