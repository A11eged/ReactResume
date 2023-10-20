import React from 'react';
import styles from './Work.module.css';
import AnimatedLettersHeader from '../UX/AnimatedLettersHeader';
import Description from '../UI/Description';
import { WorkCanvas } from './WorkCanvas';

const Work = () => {
  const text = [{ type: 'heading1', text: 'My Portfolio' }];
  return (
    <div className={styles.work} id="work">
      <AnimatedLettersHeader text={text}/>
      <Description text={
        `This is a small gallery of recent projects that I developed. Stay tuned for more projects as I will
        consistently be adding more both here and on Github!`
        }/>
      <WorkCanvas/>
    </div>
  );
};

export default Work;
