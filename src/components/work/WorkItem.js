import React, { useState } from 'react';
import Button from '../UI/Button';
import { Breakpoint } from 'react-socks';
import Card from './Card';
import styles from './WorkItem.module.css';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WorkItem = (props) => {
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
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const SvgComponent = props.svg;

  return (
    <Card className={styles.workItem} styles={{ width: props.containerWidth }}>
      <div className={styles.svgContainer}>
        <SvgComponent
          className={styles.svg}
          // theme provider, dark ? "#3f3f3f" : "#ccc"
          fill="#3f3f3f"
          width={props.width}
          height={props.height}
          viewBox={props.viewBox}          
        />
      </div>

      {/* Mobile */}
      <Breakpoint s down>
        <div
          className={styles.textBox}
          styles={{ width: props.containerWidth }}
        >
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
          <a href={props.link} className={styles.link}>
            <Button type="button" className={styles.Button}>
              {props.linkText}
            </Button>
          </a>
        </div>
      </Breakpoint>

      {/* Desktop */}
      <Breakpoint m up>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            style={{
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ExpandMoreIcon
              style={{
                color: '#fff',
                width: '2.5rem',
                height: '2.5rem',
              }}
            />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <h2 className={styles.title} style={{}}>
              {props.title}
            </h2>
            <p className={styles.description}>
              {props.description}
            </p>
            <a className={styles.link} href={props.link}>
              <Button
                type="button"
                className={styles.Button}
                height="auto"
                width="9rem"
                color="black"
              >
                {props.linkText}
              </Button>
            </a>
          </CardContent>
        </Collapse>
      </Breakpoint>
    </Card>
  );
};

export default WorkItem;
