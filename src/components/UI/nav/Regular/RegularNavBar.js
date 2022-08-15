import React from 'react';
import styles from './RegularNavBar.module.css';
import RegularNavBarMenu from './RegularNavBarMenu';
import ContactSVG from '../NavSVG/ContactSVG';
import HomeSVG from '../NavSVG/HomeSVG';
import WorkSVG from '../NavSVG/WorkSVG';
import AboutSVG from '../NavSVG/AboutSVG';

const RegularNavBar = () => {
  const NavBarItems = [
    {
      title: 'Home',
      link: '/#home',
      svg: <HomeSVG />,
    },
    {
      title: 'Work',
      link: '/#work',
      svg: <WorkSVG />,
    },
    {
      title: 'Contact',
      link: '/#contact',
      svg: <ContactSVG />,
    },
    {
      title: 'About',
      link: '/#about',
      svg: <AboutSVG />,
    },
  ];
  return (
    <nav className={styles.RegularNavBar}>
      <div className={styles.RegularNavBarContainer}>
        <RegularNavBarMenu items={NavBarItems}></RegularNavBarMenu>
      </div>
    </nav>
  );
};

export default RegularNavBar;
