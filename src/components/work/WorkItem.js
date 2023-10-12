import React from 'react';
import Card from './Card';
import styles from './WorkItem.module.css';
import WalletViewSVG from './images/WalletViewSVG';
// import { default as WalletView } from './images/WalletViewSVG';

const WorkItem = (props) => {
  return (
    <Card className={styles.workItem}>
      <div>{props.image && <img src={props.image} alt={props.title} />}</div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
      <a className={styles.link} href={props.link}>{props.linkText}</a>
    </Card>
  );
};

export default WorkItem;
