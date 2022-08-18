import React from 'react';
import styles from './ContactHeader.module.css';
import AnimatedLetters from '../UX/AnimatedLetters';
import { motion } from 'framer-motion';

const ContactHeader = () => {
  const text = [{ type: 'heading1', text: 'Contact Me!' }];

  return (
    <motion.div className={styles.contactHeader}>
      <div className={styles.container}>
        {text.map((item, index) => {
          return (
            <AnimatedLetters
              {...item}
              key={index}
              transitionColor={['#fff', '#08fdd8']}
              styles={{ color: '#fff' }}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactHeader;
