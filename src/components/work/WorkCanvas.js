import React from 'react';
import {WalletViewSVG} from './images/WalletViewSVG';
import { InteractiveGridItem } from './InteractiveGrid';
// import { AdasResponseSVG } from './images/AdasResponseSVG';


const WorkItems = [
  {
    id: 0,
    title: 'New Item',
    description:
      'I am always coming up with new things to develop and push out! ',
    link: 'https://crypto-options.netlify.com/',
    linkText: 'View Project',
    svg: WalletViewSVG

  },
  {
    id: 1,
    title: 'Wallet View',
    description:
      ` This was the first webapp I created and I got the idea to create it because at the time, Cryptocurrency was a really popular topic and I was curious if I could use some of the public data to make a useful dashboard. 
        The application is built using HTML, CSS, JS and is deployed on Amazon Web Services. 
        This website uses a Python backend and Pandas to create Dataframes which returns a users Ethereum balance over time, their current wallet value, and a transaction frequency between parties.`,
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
    <div>
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

