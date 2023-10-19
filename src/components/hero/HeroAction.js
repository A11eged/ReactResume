import React from 'react';
import styles from './HeroAction.module.css';
import { HashLink } from 'react-router-hash-link';
import Button from '../UI/Button';

const HeroAction = () => {
  return (
    <div className={styles.HeroAction}>

      {/* <Button>
        <HashLink to="/#contact" smooth={true}>
            Contact <br /> Me!
        </HashLink>
      </Button>
      <Button>
        <HashLink to="/#work" smooth={true}>
            View My <br /> Work!
        </HashLink>
      </Button> */}
    </div>
  );
};

export default HeroAction;
