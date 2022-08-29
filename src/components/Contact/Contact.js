import React from 'react';
import { Breakpoint } from 'react-socks';
import { HashLink } from 'react-router-hash-link';
import UpArrow from '../UX/UpArrow';
import styles from './Contact.module.css';
import ContactRefs from './ContactRefs';
import ContactDescription from './ContactDescription';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';
import { Grid } from '@mui/material';

const Contact = () => {
  const saveFormHandler = (enteredForm) => {
    const formData = {
      ...enteredForm,
      time: new Date().getTime(),
    };
    console.log(formData);
  };

  // const item =

  return (
    <Grid container direction={'row'} columns={2}>
      <Grid item xs={2} s={2} md={1} l={1} xl={1}>
        <div className={styles.contact} id="contact">
          <ContactHeader></ContactHeader>
          <ContactDescription></ContactDescription>
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
            {/* <UpArrow fill={'#fff'} right={'-1rem'} bottom={'2rem'} />
        <UpArrow fill={'#fff'} left={'-1rem'} bottom={'2rem'} /> */}
          </HashLink>
        </div>
      </Grid>
      <Grid item xs={2} s={2} md={1} l={1} xl={1}>
        <ContactRefs></ContactRefs>
      </Grid>
    </Grid>
  );
};

export default Contact;
