import React, { useState, useRef } from 'react';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';
import Button from '../UI/Button';

const ContactForm = (props) => {
  const form = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredSubject, setEnteredSubject] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  // Using State to check if valid
  const [nameValid, setNameValid] = useState(true);
  const [subjectValid, setSubjectValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const SERVICE_ID = 'service_z2l2snl';
  const TEMPLATE_ID = 'template_77ohp9i';
  const USER_ID = 'KRbCPh6mGObemWGfX';

  const submitHandler = (event) => {
    event.preventDefault();
    const formContent = {
      name: enteredName,
      subject: enteredSubject,
      email: enteredEmail,
      phone: enteredPhone,
      message: enteredMessage,
    };
    if (
      enteredName.trim().length === 0 &&
      enteredSubject.trim().length === 0 &&
      enteredEmail.trim().length === 0 &&
      enteredPhone.trim().length === 0 &&
      enteredMessage.trim().length === 0
    ) {
      setNameValid(false);
      setSubjectValid(false);
      setEmailValid(false);
      setPhoneValid(false);
      setMessageValid(false);
    } else {
      props.onSaveForm(formContent);
      setEnteredName('');
      setEnteredSubject('');
      setEnteredEmail('');
      setEnteredPhone('');
      setEnteredMessage('');
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const nameChangeHandler = (event) => {
    // event.target.styles.display = 'none';
    if (event.target.value.trim().length === 0) {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
    setEnteredName(event.target.value);
  };

  const subjectChangeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setSubjectValid(false);
    } else {
      setSubjectValid(true);
    }
    setEnteredSubject(event.target.value);
  };

  const emailChangeHandler = (event) => {
    if (
      event.target.value.trim().length === 0 ||
      !event.target.value.includes('@', '.')
    ) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
    setEnteredEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    // if (event.target.value.trim().length < 10) {
    //   setPhoneValid(false);
    // } else {
    //   setPhoneValid(true);
    // }
    setEnteredPhone(event.target.value);
  };

  const messageChangeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setMessageValid(false);
    } else {
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
          // className={`${styles['form-control']} ${!isValid && styles.invalid}`}
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

            // figure out a place holder, message font looks off
          ></textarea>
          <label className={styles.label}></label>
        </li>
        <li className={styles.formButton}>
          <Button type="submit">Send Me!</Button>
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;
