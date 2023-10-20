import React, { useState } from "react";
import styles from './InteractiveGrid.module.css';
import { WalletViewSVG } from '../work/images/WalletViewSVG';
import { motion, useScroll, useAnimation } from 'framer-motion';
import Button from '../UI/Button';

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
      `This was my first web application, at the time NFT's and Cryptocurreny were very popular, so I was interested to see if I could learn how to work with API's through this. The application is built using HTML, CSS, and JS and deployed on Amazon Web Services. This website uses a Python backend and Pandas to create Dataframes that display a users Ethereum balance over time, their current wallet value, and a transaction frequency between parties.`,
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

export const InteractiveGridItem = (props) => {
  const { item } = props;
  const [expanded, setExpanded] = useState(false);
  const controls = useAnimation();

  // Animation variants for the text box
  const variants = {
    hidden: { x: '-25%', opacity: 0 },
    visible: { x: '10%', opacity: 100 },
  };

  // Animate when the component comes into view
  if (useScroll().isInViewport) {
    controls.start("onscreen");
  }

  return (
    <div className={styles.gridItemContainer}>
      <div className={styles.gridItem}>
        <motion.div
          className={styles.svgContainer}
          viewport={{amount:.8}}
          onViewportEnter={() => {
            setExpanded(true);
          }}
        >
          <item.svg 
            className={`${styles.svg}`}
            onClick={() => {
              setExpanded(!expanded);
            }}
          />
        </motion.div>
        <motion.div
          className={styles.textBoxContainer}
          initial='hidden'
          animate={expanded ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ ease: "easeOut", duration: 0.75 }}
        >
          <div className={styles.textBox}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.description}</p>
            <Button>
              <a className={styles.link} href={item.link}>{item.linkText}</a>
            </Button>

          </div>
        </motion.div>
      </div>
    </div>
  );
};



