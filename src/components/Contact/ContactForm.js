import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import Button from '../UI/Button';

const ContactForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredSubject, setEnteredSubject] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const formContent = {
      name: enteredName,
      subject: enteredSubject,
      email: enteredEmail,
      phone: enteredPhone,
      message: enteredMessage,
    };

    props.onSaveForm(formContent);
    setEnteredName('');
    setEnteredSubject('');
    setEnteredEmail('');
    setEnteredPhone('');
    setEnteredMessage('');
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const subjectChangeHandler = (event) => {
    setEnteredSubject(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  let hasContent = <p>Missing Text</p>;
  return (
    <form
      onSubmit={submitHandler}
      className={styles.contactForm}
      autoComplete="off"
    >
      <ul className={styles.formControls}>
        <li className={styles.formName}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            onChange={nameChangeHandler}
            value={enteredName}
            required
          />
          {enteredName.length > 0 && hasContent}
          <label className={styles.label}></label>
        </li>
        <li className={styles.formPhone}>
          <input
            className={styles.input}
            type="phone"
            placeholder="Phone"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
          <label className={styles.label}></label>
        </li>
        <li className={styles.formEmail}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            required
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <label className={styles.label}></label>
        </li>
        <li className={styles.subject}>
          <input
            className={styles.input}
            type="text"
            placeholder="Subject"
            required
            value={enteredSubject}
            onChange={subjectChangeHandler}
          />
          <label className={styles.label}></label>
        </li>

        <li className={styles.formMessage}>
          <textarea
            placeholder="Message"
            value={enteredMessage}
            className={styles.formMessageArea}
            required
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
