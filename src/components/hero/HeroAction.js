import React from 'react';
import styles from './HeroAction.module.css';
import { HashLink } from 'react-router-hash-link';

const HeroAction = () => {
  return (
    <div className={styles.HeroAction}>
      <HashLink to="/#contact" smooth={true}>
          Contact <br /> Me!
      </HashLink>

      <HashLink to="/#work" smooth={true}>
          View My <br /> Work!
      </HashLink>
    </div>
  );
};

export default HeroAction;
