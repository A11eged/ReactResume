import React from 'react';
import styles from './Contact.module.css';
import ContactDescription from './ContactDescription';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

const Contact = () => {
  return (
    <div className={styles.contact} id="#contact">
      <ContactHeader></ContactHeader>
      <ContactDescription></ContactDescription>
      <ContactForm />
    </div>
  );
};

export default Contact;
