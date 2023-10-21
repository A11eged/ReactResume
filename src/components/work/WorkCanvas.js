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
      ` When I created this webapp, Cryptocurrency was a really popular topic and I was curious if I could use some of the public data to make a useful dashboard. 
        The application is built using HTML, CSS, JS and is deployed on Amazon Web Services. 
        The backend uses Pandas and Flask API to create Dataframes which returns a users Ethereum balance over time, their current wallet value, and a transaction frequency between parties.`,
    link: 'http://walletview.us-east-1.elasticbeanstalk.com/#home',
    linkText: 'View Project',
    svg: WalletViewSVG

  },
  {
    id: 2,
    title: 'Adas Response',
    description:
      `
      This was a full stack application that I developed with my startup team. We were contracted to create a web application that would allow users to upload collision reports and receive a detailed analysis of the collision including which sensors should be fixed.
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

