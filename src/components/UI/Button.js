import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={styles.Button}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
