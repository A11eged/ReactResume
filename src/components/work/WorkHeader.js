import React from 'react';
import styles from './WorkHeader.module.css';
import AnimatedLetters from '../UX/AnimatedLetters';
import { motion } from 'framer-motion';
const WorkHeader = () => {
  const text = [{ type: 'heading1', text: 'My Portfolio' }];
  return (
    <motion.div className={styles.WorkHeader}>
      <div className={styles.WorkHeaderTitle}>
        {text.map((item, index) => {
          return (
            <AnimatedLetters
              {...item}
              key={index}
              transitionColor={['#08fdd8', '#ff0b56', '#c0c0c0']}
              endingColor={['#c0c0c0']}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default WorkHeader;
