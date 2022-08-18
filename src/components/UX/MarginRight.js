import React from 'react';
// import styles from "./AnimatedLetters.module.css";
import UpArrow from './UpArrow';

const MarginRight = (props) => {
  return (
    <div
      className={props.className}
      style={{
        right: '0px',
        marginRight: '.5rem',
        width: '5vw',
        height: '100%',
        display: 'flex',
        position: '',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <UpArrow fill={'#fff'} />
      <UpArrow fill={'#fff'} />
    </div>
  );
};

export default MarginRight;
