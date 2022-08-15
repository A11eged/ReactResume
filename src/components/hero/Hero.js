import React from 'react';
import styles from './Hero.module.css';
import HeroHeading from './HeroHeading';
import HeroSubheading from './HeroSubheading';
import ProfileSVG from './HeroSVG/ProfileSVG';
import HeroAction from './HeroAction';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.headingContainer}>
          <HeroHeading></HeroHeading>
          <HeroSubheading></HeroSubheading>
          <ProfileSVG />
        </div>
        <HeroAction></HeroAction>
      </div>
    </div>
  );
};

export default Hero;
