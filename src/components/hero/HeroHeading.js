import React from 'react';
import styles from './HeroHeading.module.css';
import AnimatedLetters from '../UX/AnimatedLetters';
import { motion } from 'framer-motion';
import { ThemeContext } from '../Context/ThemeContext';
import { BreakpointProvider, Breakpoint } from 'react-socks';

const HeroHeading = () => {
  const { theme } = React.useContext(ThemeContext);

  const headingSmall = [
    { type: 'heading2', text: 'Minh' },
    { type: 'heading2', text: "Tran" },
  ];

  const headingLarge = [
    { type: 'heading2', text: 'Minh Tran' },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <BreakpointProvider>
      <Breakpoint s down>
        <motion.div className={styles.HeroHeading} variants={container}>
          <div className={styles.container}>
            {headingSmall.map((item, index) => {
              return (
                <AnimatedLetters
                  {...item}
                  key={index}
                  transitionColor={theme === 'dark' ?  ['#fff', '#08fdd8'] : ['#2b2b2b', '#08fdd8']}
                  styles={{ color: theme === 'dark' ? '#fff' : '#2b2b2b' }}
              />
              );
            })}
            </div>
        </motion.div>
      </Breakpoint>
      <Breakpoint m up>
        <motion.div className={styles.HeroHeading} variants={container}>
          <div className={styles.container}>
            {headingLarge.map((item, index) => {
              return (
                <AnimatedLetters
                  {...item}
                  key={index}
                  transitionColor={theme === 'dark' ?  ['#fff', '#08fdd8'] : ['#2b2b2b', '#08fdd8']}
                  styles={{ color: theme === 'dark' ? '#fff' : '#2b2b2b' }}
              />
              );
            })}
            </div>
        </motion.div>
      </Breakpoint>
    </BreakpointProvider>
  );
};

export default HeroHeading;
