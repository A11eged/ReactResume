import React from 'react';
// import styled from 'styled-components';
import styles from './WorkButton.module.css';

const WorkButton = (props) => {
  return (
    <button
      type={props.type}
      className={styles.WorkButton}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default WorkButton;
