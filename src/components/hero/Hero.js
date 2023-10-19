import React from 'react';
import {
  Breakpoint,
  BreakpointProvider,
  setDefaultBreakpoints,
} from 'react-socks';
import { HashLink } from 'react-router-hash-link';
import styles from './Hero.module.css';
import HeroHeading from './HeroHeading';
import HeroSubheading from './HeroSubheading';
import ProfileSVG from './HeroSVG/ProfileSVG';
import HeroAction from './HeroAction';
import DownArrow from '../UX/DownArrow';

const Hero = () => {
  setDefaultBreakpoints([
    { xs: 0 },
    { s: 475 },
    { m: 769 },
    { l: 1024 },
    { xl: 2048 },
  ]);

  return (
    <BreakpointProvider>
      <div className={styles.hero} id="hero">
        <div className={styles.heroContent}>
          <div className={styles.headingContainer}>
            <HeroHeading/>
            <ProfileSVG
              w={'50'}
              h={'50'}
              scale={'1'}
              x={'0'}
              y={'0'}
            />
            <HeroSubheading/>
          </div>
          <HeroAction/>
        </div>
        <HashLink to={'#work'} smooth={true}>
          <Breakpoint s down>
            <DownArrow
              fill={'#ff0b56'}
              right={'0'}
              width={'20'}
              height={'20'}
              w={'20'}
              h={'20'}
              bottom={'-1rem'}
              scale={'1'}
              x={'0'}
              y={'0'}
            />
            <DownArrow
              fill={'#ff0b56'}
              left={'0'}
              width={'20'}
              height={'20'}
              w={'20'}
              h={'20'}
              bottom={'-1rem'}
              scale={'1'}
              x={'0'}
              y={'0'}
            />
          </Breakpoint>
          <Breakpoint m up>
            <DownArrow
              fill={'#ff0b56'}
              right={'0'}
              width={'20'}
              height={'20'}
              w={'20'}
              h={'20'}
              bottom={'-1rem'}
              scale={'2.5'}
              x={'0'}
              y={'0'}
            />
            <DownArrow
              fill={'#ff0b56'}
              left={'0'}
              width={'20'}
              height={'20'}
              w={'20'}
              h={'20'}
              bottom={'-1rem'}
              scale={'2.5'}
              x={'0'}
              y={'0'}
            />
          </Breakpoint>
        </HashLink>
      </div>
    </BreakpointProvider>
  );
};

export default Hero;
