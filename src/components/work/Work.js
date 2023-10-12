import React from 'react';
import styles from './Work.module.css';
import WorkGallery from './WorkGallery';
import WorkHeader from './WorkHeader';
import WorkDescripton from './WorkDescription';

const Work = () => {
  return (
    <div className={styles.work} id="work">
      <WorkHeader/>
      <WorkDescripton/>
      <WorkGallery/>
    </div>
  );
};

export default Work;
