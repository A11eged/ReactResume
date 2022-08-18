import React from 'react';
import styles from './MobileNavBarItem.module.css';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const MobileNavBarItem = (props) => {
  return (
    <li className={styles.NavBarItem}>
      <HashLink to={props.link} smooth={true} className={styles.NavBarLinks}>
        {props.icon}
      </HashLink>
    </li>
  );
};

export default MobileNavBarItem;
