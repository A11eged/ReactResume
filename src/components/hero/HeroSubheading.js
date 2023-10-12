import React from 'react';
import styles from './HeroSubHeading.module.css';

import RotatingTextComponent from '../UX/RotatingText';
const HeroSubheading = () => {
  const text = [{ type: 'heading2', text: 'Front End Developer' }];

  return (
    <div className={styles.container}>
      <RotatingTextComponent className={styles.subHeading} words={["ux/ui", "webapps", "data", "solutions"]}/>
    </div>

  );
};

export default HeroSubheading;