import React from 'react';
import { Breakpoint, setDefaultBreakpoints } from 'react-socks';
import styles from './Work.module.css';
import WorkGallery from './WorkGallery';
import WorkHeader from './WorkHeader';
import WorkDescripton from './WorkDescription';

const Work = () => {
  return (
    <div className={styles.work} id="work">
      <WorkHeader></WorkHeader>
      <WorkDescripton></WorkDescripton>
      <WorkGallery></WorkGallery>
    </div>
  );
};

export default Work;
