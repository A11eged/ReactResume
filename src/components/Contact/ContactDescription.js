import React from 'react';
import styles from './ContactDescription.module.css';
// import UpArrow from '../UX/UpArrow';

const ContactDescription = () => {
  return (
    <div className={styles.contactDescription}>
      <p>
        I'm interested in most web-development opportunities -- both for start
        ups and established companies. If you have any questions, please don't
        hesitate to reach out!
      </p>
    </div>
  );
};

export default ContactDescription;
