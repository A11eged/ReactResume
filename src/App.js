import React from 'react';
import { Breakpoint, setDefaultBreakpoints } from 'react-socks';
import './App.css';
import MobileNavBar from './components/UI/nav/Mobile/MobileNavBar';
import Hero from './components/hero/Hero';
// import RegularNavBar from './components/UI/nav/Regular/RegularNavBar';
import Work from './components/work/Work';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import UpArrow from './components/UX/UpArrow';

function App() {
  setDefaultBreakpoints([
    { xs: 0 },
    { s: 376 },
    { m: 768 },
    { l: 992 },
    { x: 1200 },
  ]);
  return (
    <div className="hero-container">
      <Breakpoint m down>
        <MobileNavBar></MobileNavBar>
      </Breakpoint>
      <Breakpoint m up>
        {/* <RegularNavBar></RegularNavBar> */}
      </Breakpoint>
      <Hero></Hero>
      <Work></Work>
      <About></About>
      <Contact></Contact>
      <UpArrow fill={'#fff'} />
    </div>
  );
}

export default App;
