import React, { useState, useRef } from 'react';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';
import Button from '../UI/Button';

const ContactForm = () => {
  const form = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredSubject, setEnteredSubject] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send!')
  // Using State to check if valid
  const [nameValid, setNameValid] = useState(false);
  const [subjectValid, setSubjectValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);

  const SERVICE_ID = 'service_p6e4kvw';
  const TEMPLATE_ID = 'template_77ohp9i';
  const USER_ID = 'TYedXiADJLsCO06M7';

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      nameValid &&
      subjectValid &&
      emailValid &&
      phoneValid &&
      messageValid
    ) 
    {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setButtonText('Sent!');
    } 
    // else {
    //   // Diplay an error
    //   console.warn('failed')
    // }

  };

  const nameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setNameValid(true);
    }
    setEnteredName(event.target.value);
  };

  const subjectChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setSubjectValid(true);
    }
    setEnteredSubject(event.target.value);
  };

  const emailChangeHandler = (event) => {
    if (
      event.target.value.trim().length > 0 &&
      event.target.value.includes('@', '.')
    ) {
      setEmailValid(true);
    }
    setEnteredEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    if(event.target.value.trim().length > 0) {
      setPhoneValid(true);
    }
    setEnteredPhone(event.target.value);
  }

  const messageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setMessageValid(true);
    }
    setEnteredMessage(event.target.value);
  };

  return (
    <form
      ref={form}
      onSubmit={submitHandler}
      className={styles.contactForm}
      autoComplete="off"
    >
      <ul className={`${styles.formControls}`}>
        <li
          className={`${styles.formName} ${
            !nameValid ? styles.invalid : styles.valid
          }`}
        >
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            onChange={nameChangeHandler}
            name="user_name"
            value={enteredName}
          />
          <label className={styles.label}></label>
        </li>
        <li className={`${styles.formPhone} ${!phoneValid && styles.invalid}`}>
          <input
            className={styles.input}
            type="phone"
            placeholder="Phone"
            name="user_phone"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
          <label className={styles.label}></label>
        </li>
        <li
          className={`${styles.formEmail} ${
            !emailValid ? styles.invalid : styles.valid
          }`}
        >
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            name="user_email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <label className={styles.label}></label>
        </li>
        <li
          className={`${styles.subject} ${
            !subjectValid ? styles.invalid : styles.valid
          }`}
        >
          <input
            className={styles.input}
            type="text"
            name="user_subject"
            placeholder="Subject"
            value={enteredSubject}
            onChange={subjectChangeHandler}
          />
          <label className={styles.label}></label>
        </li>

        <li
          className={`${styles.formMessage} ${
            !messageValid ? styles.invalid : styles.valid
          }`}
        >
          <textarea
            placeholder="Message"
            name="user_message"
            value={enteredMessage}
            className={styles.formMessageArea}
            onChange={messageChangeHandler}

          ></textarea>
          <label className={styles.label}></label>
        </li>
        <li className={styles.formButton}>
          <Button
            className={`${styles.button}`} 
            type="submit">
            {buttonText}
          </Button>
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;
