import React from 'react';
import styles from './Contact.module.css';
import ContactDescription from './ContactDescription';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

const Contact = () => {
  const saveFormHandler = (enteredForm) => {
    const formData = {
      ...enteredForm,
      time: new Date().getTime(),
    };
    console.log(formData);
  };

  return (
    <div className={styles.contact} id="#contact">
      <ContactHeader></ContactHeader>
      <ContactDescription></ContactDescription>
      <ContactForm onSaveForm={saveFormHandler} />
    </div>
  );
};

export default Contact;
