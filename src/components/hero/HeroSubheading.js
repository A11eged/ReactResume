import React from 'react';
import styles from './HeroSubHeading.module.css';
import AnimatedLetters from '../UX/AnimatedLetters';
import { motion } from 'framer-motion';

const HeroSubheading = () => {
  const text = [{ type: 'heading2', text: 'Front End Developer' }];

  return (
    <motion.div className={styles.subHeadingContainer}>
      <div className={styles.subHeading}>
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

export default HeroSubheading;
