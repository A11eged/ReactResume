import React from 'react';
import styles from './About.module.css';
import AnimatedLettersHeader from '../UX/AnimatedLettersHeader';
import { Description } from '@mui/icons-material';

const About = () => {
  return (
    <div className={styles.about} id="about">
      <AnimatedLettersHeader text={[{ type: 'heading1', text: 'About Me' }]}/>
      <Description text={
        ``
      }/>
    </div>
  );
};
/* I am a full stack web developer with a passion for creating beautiful
user experiences. I have a background in finance and a passion for
building web applications. I am currently looking for a position in the
web development industry. */
export default About;
