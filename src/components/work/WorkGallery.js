import React from 'react';
import styles from './WorkGallery.module.css';
import Template from './WorkItems/Template';
import WalletView from './WorkItems/WalletView';
import CryptoPtions from './WorkItems/CryptoPtions';

const WorkGallery = (props) => {
  return (
    <div className={styles.workGallery}>
      <Template></Template>
      <WalletView></WalletView>
      <CryptoPtions></CryptoPtions>
    </div>
  );
};

export default WorkGallery;
