import React from 'react';
import styles from './HeroHeading.module.css';

const HeroHeading = () => {
  const heading1 = 'Hi,';
  const heading2 = "I'm Minh";

  return (
    <div className={styles.HeroHeading}>
      <h1 className={styles.Heading}>
        {heading1}
        <br />
        {heading2}
      </h1>
    </div>
  );
};

export default HeroHeading;
