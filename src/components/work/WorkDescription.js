import React, { useRef } from 'react';
import styles from './WorkDescripton.module.css';

const WorkDescripton = () => {
  return (
    <div className={styles.WorkDescripton}>
      <p className={styles.WorkDescriptonTitle}>
        This is a small gallery of recent projects that I developed. Stay tuned for more projects as I will
        consistently be adding more both here and on Github!
      </p>
    </div>
  );
};

export default WorkDescripton;
