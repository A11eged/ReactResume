import React from 'react';
import Card from '../Card';
import WalletViewSVG from '../images/WalletViewSVG';
import styles from './CryptoPtions.module.css';
import Button from '../../UI/Button';

const CryptoPtions = () => {
  const mobileProps = {
    width: '280',
    height: '280',
    viewBox: '0 0 100 40',
  };
  const prop = [
    {
      title: 'Test Options',
      description:
        'A web application that allows users to buy and sell options on cryptocurrencies.',
      link: 'https://crypto-options.netlify.com/',
      linkText: 'View Project',
    },
  ];
  return (
    <Card className={styles.workItem} width={mobileProps.width}>
      <div className={styles.svgContainer}>
        <WalletViewSVG
          className={styles.svg}
          fill="#3f3f3f"
          width={mobileProps.width}
          height={mobileProps.height}
          viewBox={mobileProps.viewBox}
        />
      </div>
      <h2 className={styles.title}>{prop[0].title}</h2>
      <p className={styles.description}>{prop[0].description}</p>
      <a href={prop[0].link} className={styles.link}>
        <Button className={styles.Button}>View Project!</Button>
      </a>
    </Card>
  );
};

export default CryptoPtions;
