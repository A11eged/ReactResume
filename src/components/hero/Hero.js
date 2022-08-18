import React from 'react';
import { Breakpoint } from 'react-socks';
import { HashLink } from 'react-router-hash-link';
import styles from './Hero.module.css';
import HeroHeading from './HeroHeading';
import HeroSubheading from './HeroSubheading';
import ProfileSVG from './HeroSVG/ProfileSVG';
import HeroAction from './HeroAction';
import UpArrow from '../UX/UpArrow';
import DownArrow from '../UX/DownArrow';

const Hero = () => {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <div className={styles.headingContainer}>
          <HeroHeading></HeroHeading>
          <HeroSubheading></HeroSubheading>
          <ProfileSVG />
        </div>
        <HeroAction></HeroAction>
      </div>
      <HashLink to={'#work'} smooth={true}>
        <Breakpoint m down>
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
  );
};

export default Hero;
