import React from 'react';
import styles from './HeroHeading.module.css';
import AnimatedLetters from '../UX/AnimatedLetters';
import { motion } from 'framer-motion';

const HeroHeading = () => {
  const text = [
    { type: 'heading2', text: 'Hi,' },
    { type: 'heading2', text: "I'm Minh" },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div className={styles.HeroHeading} variants={container}>
      <div className={styles.container}>
        {text.map((item, index) => {
          return (
            <AnimatedLetters
              {...item}
              key={index}
              transitionColor={['#08fdd8', '#fff']}
              styles={{ color: '#fff' }}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default HeroHeading;
