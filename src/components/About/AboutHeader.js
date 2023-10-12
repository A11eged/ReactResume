import React from 'react';
import AnimatedLetters from '../UX/AnimatedLetters';
import { motion } from 'framer-motion';

const AboutHeader = () => {
  const text = [{ type: 'heading1', text: 'About' }];
  return (
    <motion.div >
      <div>
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

export default AboutHeader;
