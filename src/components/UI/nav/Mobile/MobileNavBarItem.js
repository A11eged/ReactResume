import React from 'react';
import styles from './MobileNavBarItem.module.css';

const MobileNavBarItem = (props) => {
  return (
    <li className={styles.NavBarItem}>
      <a className={styles.NavBarLinks} href={props.link}>
        {props.icon}
      </a>
    </li>
  );
};

export default MobileNavBarItem;
