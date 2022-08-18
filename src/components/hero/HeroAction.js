import React from 'react';
import Button from '../UI/Button';
import styles from './HeroAction.module.css';
import { HashLink } from 'react-router-hash-link';

const HeroAction = (props) => {
  const redirectHandler = (redirect) => {
    // window.location.replace('/#' + redirect);
    console.log(redirect);
  };
  return (
    <div className={styles.HeroAction}>
      <HashLink to="/#contact" smooth={true}>
        <Button onClick={redirectHandler}>
          Contact <br /> Me!
        </Button>
      </HashLink>

      <HashLink to="/#work" smooth={true}>
        <Button onClick={redirectHandler()}>
          View My <br /> Work!
        </Button>
      </HashLink>
    </div>
  );
};

export default HeroAction;
