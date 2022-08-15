import React, { useRef } from 'react';
import styles from './WorkDescripton.module.css';

const WorkDescripton = () => {
  const test = useRef(null);
  return (
    <div ref={test} className={styles.WorkDescripton}>
      <p className={styles.WorkDescriptonTitle}>
        This is a small gallery of recent projects that I chose, and I will be
        consistently be adding more both here and on Github!
      </p>
    </div>
  );
};

export default WorkDescripton;
