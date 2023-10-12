import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Template from './WorkItems/Template';
import WalletView from './WorkItems/WalletView';
import CryptoPtions from './WorkItems/CryptoPtions';

const WorkGallery = (props) => {

  const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ccc',
    ...theme.typography.body2,
    elevation: 2,
    height: '95%',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(1),
    textAlign: 'center',
  }));
  const mobileProps = {
    width: '100%',
    height: '100%',
    viewBox: '0 0 100 40',
  };
  return (
    <Grid
      container
      direction={'row'}
      justifyContent={'center'}
      alignItems={'flex-start'}
      width={'100%'}
      height={'100%'}
      columns={{ xs: 1, sm: 1, md: 5, lg: 4, xl: 4 }}
    >
      <Grid item xs={3} s={3} md={1} lg={1} margin={{ xs: '1rem', md: '1rem' }}>
        <Item>
          <Template
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
