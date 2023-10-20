import React, { useState } from "react";
import styles from './InteractiveGrid.module.css';
import { motion, useScroll, useAnimation } from 'framer-motion';
import Button from '../UI/Button';

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



