import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import styles from './WorkGallery.module.css';
import Template from './WorkItems/Template';
import WalletView from './WorkItems/WalletView';
import CryptoPtions from './WorkItems/CryptoPtions';

const WorkGallery = (props) => {
  const [isShown, setIsShown] = useState(false);

  const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ccc',
    ...theme.typography.body2,
    elevation: 2,
    height: '100%',
    width: '100%',
    // margin: '2rem',
    padding: theme.spacing(1.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const mobileProps = {
    width: '100%',
    height: '100%',
    viewBox: '0 0 100 40',
  };

  const mouseHandler = (e) => {
    console.log(e.target.style);
    e.target.style.transform = 'scale(1.1)';
  };

  return (
    <Grid
      container
      direction={'row'}
      justifyContent={'center'}
      alignItems={'flex-start'}
      width={'100%'}
      height={'100%'}
      columns={{ xs: 1, sm: 1, md: 4, lg: 4, xl: 4 }}
    >
      <Grid item xs={3} s={3} md={1} lg={1} margin={{ xs: '1rem', md: '1rem' }}>
        <Item>
          <Template
            // containerWidth={'%'}
            width={mobileProps.width}
            height={mobileProps.height}
          ></Template>
        </Item>
      </Grid>
      <Grid item xs={3} s={3} md={1} lg={1} margin={{ xs: '1rem', md: '1rem' }}>
        <Item>
          <WalletView
            width={mobileProps.width}
            height={mobileProps.height}
          ></WalletView>
        </Item>
      </Grid>
      <Grid item xs={3} s={3} md={1} lg={1} margin={{ xs: '1rem', md: '1rem' }}>
        <Item>
          <CryptoPtions
            width={mobileProps.width}
            height={mobileProps.height}
          ></CryptoPtions>
        </Item>
      </Grid>
    </Grid>
  );
};

export default WorkGallery;
