import React from 'react';
import styles from './HeroSubHeading.module.css';

import Typewriter from '../UX/TypeWriter';
const HeroSubheading = () => {

  return (
    <div className={styles.container}>
      <Typewriter className={styles.subHeading} words={['webapps', 'websites', 'applications', 'data', 'solutions']} initialText="Hi! I develop "/>
    </div>

  );
};

export default HeroSubheading;