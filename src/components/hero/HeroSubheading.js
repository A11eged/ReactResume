import React from 'react';
import styles from './HeroSubHeading.module.css';

import RotatingTextComponent from '../UX/RotatingText';
const HeroSubheading = () => {

  return (
    <div className={styles.container}>
      <RotatingTextComponent className={styles.subHeading} words={["ux/ui", "webapps", "data", "solutions"]}/>
    </div>

  );
};

export default HeroSubheading;