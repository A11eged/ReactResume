import React from 'react';
import ContactSVG from '../NavSVG/ContactSVG';
import HomeSVG from '../NavSVG/HomeSVG';
import WorkSVG from '../NavSVG/WorkSVG';
import AboutSVG from '../NavSVG/AboutSVG';
import styles from './MobileNavBar.module.css';
import MobileNavBarMenu from './MobileNavBarMenu';

const MobileNavBar = () => {
  const navBarItems = [
    {
      title: 'Home',
      link: '#hero',
      svg: <HomeSVG />,
    },
    {
      title: 'Work',
      link: '#work',
      svg: <WorkSVG />,
    },
    {
      title: 'Contact',
      link: '#contact',
      svg: <ContactSVG />,
    },
    {
      title: 'About',
      link: '#about',
      svg: <AboutSVG />,
    },
  ];
  return (
    <nav className={styles.NavBar}>
      <div className={styles.NavBarContainer}>
        <MobileNavBarMenu items={navBarItems}></MobileNavBarMenu>
      </div>
    </nav>
  );
};

export default MobileNavBar;
