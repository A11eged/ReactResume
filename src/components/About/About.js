import React from 'react';
import styles from './About.module.css';
import AnimatedLettersHeader from '../UX/AnimatedLettersHeader';
import Description from '../UI/Description';

const About = () => {
  return (
    <div className={styles.about} id="about">
      <AnimatedLettersHeader text={[{ type: 'heading1', text: 'About Me' }]}/>
      <Description text={
        `
        Thanks for visiting my website! My name is Minh Tran and I currently live in Boston. 
        I love coding, working with data, and using the two to create visually pleasing webapps. 
        `
      }/>
      <Description text={
        `
        I'm a recently graduated full stack web developer with a passion for creating beautiful user experiences. 
        I have a background in economics and a passion for building web applications and working with data. 
        `
      }/>
      <Description text={
        `
        On this site, you can browse through my portfolio of projects and studies that I have done. Hope you enjoy!
        `
      }/>
    </div>
  );
};

export default About;
