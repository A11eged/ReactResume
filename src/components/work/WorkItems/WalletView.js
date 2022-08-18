import React, { useState } from 'react';

import Button from '../../UI/Button';
import { Breakpoint } from 'react-socks';
import Card from '../Card';
import WalletViewSVG from '../images/WalletViewSVG';
import styles from './ItemStyles.module.css';
import { styled } from '@mui/material/styles';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WalletView = (props) => {
  // Using State to check if card expanded
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return (
      <IconButton
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
        }}
        {...other}
      />
    );
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    // display: 'flex',
    // position: 'absolute',
    // alignItems: 'center',
    // alignContent: 'center',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const prop = [
    {
      title: 'Wallet View',
      description:
        'A web application that allows users to track their Ethereum balance. The application is built using React and deployed on Netlify.',
      link: 'https://eth-tracker.netlify.com/',
      linkText: 'View Project',
    },
  ];
  return (
    <Card className={styles.workItem} styles={{ width: props.containerWidth }}>
      <div className={styles.svgContainer}>
        <WalletViewSVG
          className={styles.svg}
          fill="#3f3f3f"
          width={props.width}
          height={props.height}
          viewBox={props.viewBox}
        />
      </div>

      <Breakpoint m down>
        <div
          className={styles.textBox}
          styles={{ width: props.containerWidth }}
        >
          <h2 className={styles.title}>{prop[0].title}</h2>
          <p className={styles.description}>{prop[0].description}</p>
          <a href={prop[0].link} className={styles.link}>
            <Button type="button" className={styles.Button}>
              View Project!
            </Button>
          </a>
        </div>
      </Breakpoint>

      <Breakpoint m up>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ExpandMoreIcon
              style={{
                color: '#fff',
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                alignContent: 'center',
              }}
            />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className={styles.title}>
              {prop[0].title}
            </Typography>
            <Typography paragraph className={styles.description}>
              {prop[0].description}
            </Typography>
            <a className={styles.link} href={prop[0].link}>
              <Button type="button" className={styles.Button}>
                View Project!
              </Button>
            </a>
          </CardContent>
        </Collapse>
      </Breakpoint>
    </Card>
  );
};

export default WalletView;
