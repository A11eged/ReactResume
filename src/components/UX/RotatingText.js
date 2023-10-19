import React, { useState, useEffect } from 'react';
import styles from '../hero/HeroSubHeading.module.css'
import AnimatedLetters from '../UX/AnimatedLetters';
import { ThemeContext } from '../Context/ThemeContext';

import { motion } from 'framer-motion';
const RotatingTextComponent = ({words}) => {
    const { theme } = React.useContext(ThemeContext);

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1500); 

        return () => clearInterval(interval);
    }, [words.length]);

    const text = [{type: 'div', text: 'Hi, I develop'}]

    return (
        <div>
          <motion.div className={styles.container}>
            {text.map((item, index) => {
              return (
                <AnimatedLetters classname={styles.subHeading}
                  {...item}
                  key={index}
                  transitionColor={theme === 'dark' ?  ['#ffffff', '#08fdd8', '#ff0b56'] : ['#2b2b2b', '#08fdd8']}
                  styles={{ color: theme === 'dark' ? '#ffffff' : '#2b2b2b' }}
                />
              );
            })}
            <div className={styles.rotatingContainer}><span className={styles.rotatingText}>{words[currentWordIndex]}</span></div>
          </motion.div>
        </div>
    );
}

export default RotatingTextComponent;
