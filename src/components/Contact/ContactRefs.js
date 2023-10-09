import React from 'react';
import styles from './ContactRefs.module.css';
import Github from './icons/github';
import Instagram from './icons/instagram';

import Linkedin from './icons/linkedin';

const ContactRefs = () => {

  const contacts = [
    {
      label: 'Github',
      link: 'https://github.com/A11eged',
      icon: <Github height={50} width={50} />,
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/minh-tran-b617a8163/',
      icon: <Linkedin height={50} width={50} />,
    },
    {
      label: 'Instragram',
      link: 'https://www.instagram.com/_minh_tran_/',
      icon: <Instagram height={50} width={50} />,
    },
  ];
  return (
    <div className={styles.container} id="links">
      {contacts.map((contact, index) => {
        return (
          <div className={styles.card} key={index}>
            <a className={styles.link} href={contact.link}>
              {contact.icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ContactRefs;
