import React from 'react';
import styles from './ContactForm.module.css';
import Button from '../UI/Button';

const ContactForm = () => {
  const sendHandler = () => {
    console.log('send');
  };
  // const inputs = document.querySelectorAll('input');

  // inputs.forEach((el) => {
  //   el.addEventListener('blur', (e) => {
  //     if (e.target.value) {
  //       e.target.classList.add('dirty');
  //     } else {
  //       e.target.classList.remove('dirty');
  //     }
  //   });
  // });
  return (
    <form className={styles.contactForm} autoComplete="off">
      <ul className={styles.formControls}>
        <li className={styles.formName}>
          <input className={styles.input} type="text" placeholder="Name" />
          <label className={styles.label}></label>
        </li>
        <li className={styles.subject}>
          <input className={styles.input} type="text" placeholder="Subject" />
          <label className={styles.label}></label>
        </li>
        <li className={styles.formEmail}>
          <input className={styles.input} type="email" placeholder="Email" />
          <label className={styles.label}></label>
        </li>
        <li className={styles.formPhone}>
          <input className={styles.input} type="phone" placeholder="Phone" />
          <label className={styles.label}></label>
        </li>
        <li className={styles.formMessage}>
          <label className={styles.label}></label>
          <textarea
            placeholder="Message"
            className={styles.formMessageArea}
            // figure out a place holder, message font looks off
          ></textarea>
        </li>
        <li className={styles.formButton}>
          <Button onClick={sendHandler}>Send Me!</Button>
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;
