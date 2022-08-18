import React from 'react';
import styles from './About.module.css';
import AboutHeader from './AboutHeader';
import AboutDescription from './AboutDescription';

const About = () => {
  return (
    <div className={styles.about} id="about">
      <AboutHeader></AboutHeader>
      <AboutDescription></AboutDescription>
    </div>
  );
};

export default About;
