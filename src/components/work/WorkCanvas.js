import React from 'react';
import {WalletViewSVG} from './images/WalletViewSVG';
import { InteractiveGridItem } from './InteractiveGrid';
// import { AdasResponseSVG } from './images/AdasResponseSVG';
import styles from './WorkCanvas.module.css';

const WorkItems = [
  {
    id: 0,
    title: 'New Item',
    description:
      'I am always coming up with new things to develop and push out! ',
    link: 'https://github.com/HungryMidas?tab=repositories',
    linkText: 'View Github',
    svg: WalletViewSVG

  },
  {
    id: 1,
    title: 'Wallet View',
    description:
      ` This is a full stack web app is built using Python, HTML, CSS, JS and is deployed on Amazon Web Services. 
        The backend uses Pandas and Flask API to clean, modify and deliver data to the front end.`,
    link: 'http://walletview.us-east-1.elasticbeanstalk.com/#home',
    linkText: 'View Project',
    svg: WalletViewSVG

  },
  {
    id: 2,
    title: 'Adas Response',
    description:
      `
      My team was contracted to create a full stack a web application that would allow users to upload collision reports and receive a detailed analysis of the collision including which car sensors should be fixed.
      `,
    link: 'https://adasresponse.com/',
    linkText: 'View Project',
    // svg: AdasResponseSVG
    svg: WalletViewSVG

  },
];

export const WorkCanvas = () => {

  return (
    <div className={styles.canvas}>
      {WorkItems.map((item, index) => {
        return (
          <InteractiveGridItem 
            item={item}
            key={index}
          />
        )
      })}
    </div>
  );

}

