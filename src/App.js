import React from 'react';
import {
  Breakpoint,
  setDefaultBreakpoints,
  BreakpointProvider,
} from 'react-socks';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './App.css';
import MobileNavBar from './components/UI/nav/Mobile/MobileNavBar';
import Hero from './components/hero/Hero';
// import RegularNavBar from './components/UI/nav/Regular/RegularNavBar';
import Work from './components/work/Work';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import UpArrow from './components/UX/UpArrow';
import MarginRight from './components/UX/MarginRight';
import TechStack from './components/UX/TechStack';

function App() {
  // setDefaultBreakpoints([
  //   { xs: 0 },
  //   { s: 376 },
  //   { m: 768 },
  //   { l: 992 },
  //   { x: 1200 },
  // ]);
  setDefaultBreakpoints([
    { xs: 0 },
    { s: 475 },
    { m: 769 },
    { l: 1024 },
    { xl: 2048 },
  ]);
  return (
    <BrowserRouter>
      <BreakpointProvider>
        <div className="hero-container">
          <Breakpoint s down>
            <MobileNavBar />
          </Breakpoint>

          <Hero></Hero>
          {/* <TechStack></TechStack> */}
          <Work></Work>

          <About></About>
          <Contact></Contact>
        </div>
      </BreakpointProvider>
    </BrowserRouter>
  );
}

export default App;
