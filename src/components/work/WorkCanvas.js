import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import {WalletViewSVG} from './images/WalletViewSVG';
import { NewWorkItem } from './NewWorkItem';
import styles from './WorkCanvas.module.css';
import Stack from '@mui/material/Stack';
import { InteractiveGrid, InteractiveGridItem } from '../UX/InteractiveGrid';


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
      ' The application is built using React and deployed on Amazon Web Services. This website uses a Python backend and Pandas to create Dataframes which, after some functions are called, returns a users Ethereum balance over time, their current wallet value, and a transaction frequency between parties.',
    link: 'http://walletview.us-east-1.elasticbeanstalk.com/#home',
    linkText: 'View Project',
    svg: WalletViewSVG

  },
  {
    id: 2,
    title: 'Crypto Options',
    description:
      'A web application that allows users to buy and sell cryptocurrency options in a more calculated manner. The application allows user to view projected pricing by utilizing the Black Scholes Algorithm to determine the price of a given contract as variables change',
    link: 'https://crypto-options.netlify.com/',
    linkText: 'View Project',
    svg: WalletViewSVG

  },
];

export const WorkCanvas = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    if (activeItem === item.id) {
      setActiveItem(null);
    } else {
      setActiveItem(item.id);
    }
  };

  return (
    <div className={styles.canvasContainer}>
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

