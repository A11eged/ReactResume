import React from 'react';
import { Breakpoint } from 'react-socks';
import { HashLink } from 'react-router-hash-link';
import UpArrow from '../UX/UpArrow';
import styles from './Contact.module.css';
import ContactRefs from './ContactRefs';
import ContactForm from './ContactForm';
import { Grid } from '@mui/material';
import AnimatedLettersHeader from '../UX/AnimatedLettersHeader';
import Description from '../UI/Description';

const Contact = () => {
  const saveFormHandler = (enteredForm) => {
    const formData = {
      ...enteredForm,
      time: new Date().getTime(),
    };
    console.log(formData);
  };

  return (
    <Grid container direction={'row'} columns={2}>
      <Grid item xs={2} s={2} md={1} l={1} xl={1}>
        <div className={styles.contact} id="contact">
          <AnimatedLettersHeader text={[{type: 'heading1', text: 'Contact Me!'}]}/>
          <Description
            text={
              `I'm interested in web-development opportunities -- both for start
              ups and established companies. If you have any questions, please don't
              hesitate to reach out!`
            }
          />
          <ContactForm onSaveForm={saveFormHandler} />
          <HashLink to={'#hero'}>
            <Breakpoint s down>
              <UpArrow
                fill={'#fff'}
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
              <UpArrow
                fill={'#fff'}
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
              <UpArrow
                fill={'#fff'}
                right={'0'}
                width={'20'}
                height={'20'}
                w={'1'}
                h={'80'}
                bottom={'-1rem'}
                scale={'4'}
                x={'0'}
                y={'0'}
              />
              <UpArrow
                fill={'#fff'}
                left={'0'}
                width={'20'}
                height={'20'}
                w={'1'}
                h={'80'}
                bottom={'-1rem'}
                scale={'4'}
                x={'0'}
                y={'0'}
              />
            </Breakpoint>
          </HashLink>
        </div>
      </Grid>
      <Grid item xs={2} s={2} md={1} l={1} xl={1}>
        <ContactRefs/>
      </Grid>
    </Grid>
  );
};

export default Contact;
