import React from 'react';
import styles from './Description.module.css';

const Description = (props) => {
  const { text } = props;
  return (
    <div className={styles.Title}>
      <p className={styles.Text}>{text}</p>
    </div>
  );
}

export default Description