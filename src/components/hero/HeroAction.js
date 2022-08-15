import React from 'react';
import Button from '../UI/Button';
import styles from './HeroAction.module.css';

const HeroAction = (props) => {
  const redirectHandler = (redirect) => {
    // window.location.replace('/#' + redirect);
    console.log(redirect);
  };
  return (
    <div className={styles.HeroAction}>
      <Button onClick={redirectHandler}>
        Contact <br /> Me!
      </Button>

      <Button onClick={redirectHandler()}>
        View My <br /> Work!
      </Button>
    </div>
  );
};

export default HeroAction;
