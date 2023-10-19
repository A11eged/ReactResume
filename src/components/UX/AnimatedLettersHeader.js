import React, { useContext } from 'react';
import styles from './AnimatedLettersHeader.module.css';
import AnimatedLetters from './AnimatedLetters';
import { motion } from 'framer-motion';
import { ThemeContext } from '../Context/ThemeContext'

const AnimatedLettersHeader = (props) => {
  const { theme } = useContext(ThemeContext);
  const { text } = props;

  return (
    <motion.div className={styles.Header}>
      <div className={styles.Title}>
        {text.map((item, index) => {
          return (
            <AnimatedLetters
              {...item}
              key={index}
              transitionColor={theme === 'dark' ?  ['#08fdd8', '#FF5733', '#fff'] : ['#0056b3', '#FF6B85', '#3f3f3f']}
              styles={{ color: theme === 'dark' ? '##08fdd8' : '#0056b3' }}
            />
          );
        })}
      </div>
    </motion.div>
  )

};

export default AnimatedLettersHeader;