import React from 'react';
import styles from './RegularNavBarMenu.module.css';
import RegularNavBarItem from './RegularNavBarItem';

const RegularNavBarMenu = (props) => {
  return (
    <div className={styles.NavBarMenuContainer}>
      <ul className={styles.NavBarMenu}>
        <RegularNavBarItem
          title={props.items[0].title}
          link={props.items[0].link}
          icon={props.items[0].svg}
        />
        <RegularNavBarItem
          title={props.items[1].title}
          link={props.items[1].link}
          icon={props.items[1].svg}
        />
        <RegularNavBarItem
          title={props.items[2].title}
          link={props.items[2].link}
          icon={props.items[2].svg}
        />
        <RegularNavBarItem
          title={props.items[3].title}
          link={props.items[3].link}
          icon={props.items[3].svg}
        />
      </ul>{' '}
    </div>
  );
};

export default RegularNavBarMenu;
