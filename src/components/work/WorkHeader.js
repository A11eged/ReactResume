import React, { useContext } from 'react';
import styles from './WorkHeader.module.css';
import AnimatedLetters from '../UX/AnimatedLetters';
import { motion } from 'framer-motion';
import {ThemeContext } from '../Context/ThemeContext'
const WorkHeader = () => {
  const { theme } = React.useContext(ThemeContext);
  const text = [{ type: 'heading1', text: 'My Portfolio' }];
  return (
    <motion.div className={styles.WorkHeader}>
      <div className={styles.WorkHeaderTitle}>
        {text.map((item, index) => {
          return (
            <AnimatedLetters
              {...item}
              key={index}
              transitionColor={theme === 'dark' ?  ['#08fdd8', '#fff', '#08fdd8'] : ['#2b2b2b', '#08fdd8']}
              styles={{ color: theme === 'dark' ? '##08fdd8' : '#2b2b2b' }}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default WorkHeader;
