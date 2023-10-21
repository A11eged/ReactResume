import React, { useState, useEffect } from 'react';

const Typewriter = (props) => {
  const { words, initialText } = props;
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [backward, setBackward] = useState(false);
  const [text, setText] = useState(initialText);
  const [delay, setDelay] = useState(100);

  useEffect(() => {
    if (index === words.length) return;  // Exit early if we've run out of words

    if (backward && text === initialText) {
      setBackward(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);  // Move to next word
      setSubIndex(0);
      setDelay(1000);
    } else if (!backward && subIndex === words[index].length) {
      setBackward(true);
      console.log('backward')
      console.log(delay)
      setDelay(3000);
    } else {
      setDelay(125);
    }

    const timeout = setTimeout(() => {
      if (!backward) {
        setText((prevText) => prevText + words[index][subIndex]);
        setSubIndex((prevSubIndex) => prevSubIndex + 1);
      } else {
        setText((prevText) => prevText.substring(0, prevText.length - 1));
        setSubIndex((prevSubIndex) => prevSubIndex - 1);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, subIndex, index, backward, delay, words, initialText]);

  return <>{text}</>;
};

export default Typewriter;