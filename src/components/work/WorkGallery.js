import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import WorkItem from './WorkItem';
import WalletViewSVG from './images/WalletViewSVG';

const WorkGallery = (props) => {

  const WorkItems = [
    {
      title: 'New Item',
      description:
        'I am always coming up with new things to develop and push out! ',
      link: 'https://crypto-options.netlify.com/',
      linkText: 'View Project',
      svg: WalletViewSVG,
    },
    {
      title: 'Wallet View',
      description:
        ' The application is built using React and deployed on Amazon Web Services. This website uses a Python backend and Pandas to create Dataframes which, after some functions are called, returns a users Ethereum balance over time, their current wallet value, and a transaction frequency between parties.',
      link: 'http://walletview.us-east-1.elasticbeanstalk.com/#home',
      linkText: 'View Project',
      svg: WalletViewSVG,

    },
    {
      title: 'Crypto Options',
      description:
        'A web application that allows users to buy and sell cryptocurrency options in a more calculated manner. The application allows user to view projected pricing by utilizing the Black Scholes Algorithm to determine the price of a given contract as variables change',
      link: 'https://crypto-options.netlify.com/',
      linkText: 'View Project',
      svg: WalletViewSVG,

    },
  ];

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
    color: theme.palette.text.secondary,
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
          <WorkItem
            // containerWidth={'%'}
            svg={WorkItems[0].svg}
            title={WorkItems[0].title}
            description={WorkItems[0].description}
            link={WorkItems[0].link}
            linkText={WorkItems[0].linkText}
            width={mobileProps.width}
            height={mobileProps.height}
          />
        </Item>
      </Grid>
      <Grid item xs={3} s={3} md={1} lg={1} margin={{ xs: '1rem', md: '1rem' }}>
        <Item>
          <WorkItem
            svg={WorkItems[1].svg}
            title={WorkItems[1].title}
            description={WorkItems[1].description}
            link={WorkItems[1].link}
            linkText={WorkItems[1].linkText}
            width={mobileProps.width}
            height={mobileProps.height}
          />
        </Item>
      </Grid>
      <Grid item xs={3} s={3} md={1} lg={1} margin={{ xs: '1rem', md: '1rem' }}>
        <Item>
          <WorkItem
            svg={WorkItems[2].svg}
            title={WorkItems[2].title}
            description={WorkItems[2].description}
            link={WorkItems[2].link}
            linkText={WorkItems[2].linkText}
            width={mobileProps.width}
            height={mobileProps.height}          />
        </Item>
      </Grid>
    </Grid>
  );
};

export default WorkGallery;
