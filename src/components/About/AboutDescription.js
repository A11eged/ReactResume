import React from 'react';
import styles from './AboutDescription.module.css';

const AboutDescription = () => {
  return (
    <div className={styles.aboutDescription}>
      <p className={styles.aboutDescriptionText}>
        I am a full stack web developer with a passion for creating beautiful
        user experiences. I have a background in finance and a passion for
        building web applications. I am currently looking for a position in the
        web development industry.
      </p>
    </div>
  );
};

export default AboutDescription;
