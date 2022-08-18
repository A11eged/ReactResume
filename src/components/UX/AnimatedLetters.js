import React from 'react';
import { motion } from 'framer-motion';

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
};

// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedLetters = (props) => {
  //  Split each word of props.text into an array
  const splitWords = props.text.split(' ');

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push('\u00A0');
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: 'hidden',
                    display: 'inline-block',
                  }}
                  key={index}
                >
                  <motion.span
                    whileHover={{
                      // scale: [1.03, 1, 1.02, 1.1, 1],
                      translateY: [
                        '0%',
                        '-15%',
                        '0%',
                        '-7%',
                        '0%',
                        '-3%',
                        '0%',
                      ],
                      times: [0.7, 0.8, 0.9, 0.95, 0.97, 0.98, 1],
                      color: props.transitionColor,
                    }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 10,
                      duration: 1,
                      ease: 'easeInOut',
                      // color: props.endingColor,
                      // times: [0, 0.2, 0.4, 0.6, 1],
                      repeatDelay: 1,
                    }}
                    style={{
                      display: 'inline-block',
                      fontFamily: 'Raleway',
                    }}
                    // variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
  );
};

export default AnimatedLetters;
