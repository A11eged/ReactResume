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

function App() {
  setDefaultBreakpoints([
    { xs: 0 },
    { s: 376 },
    { m: 768 },
    { l: 992 },
    { x: 1200 },
  ]);
  return (
    <BrowserRouter>
      <BreakpointProvider>
        <div className="hero-container">
          {/* <MarginRight /> */}
          <Breakpoint m down>
            <MobileNavBar></MobileNavBar>
          </Breakpoint>
          <Hero></Hero>

          <Work></Work>

          <About></About>
          <Contact></Contact>
        </div>
      </BreakpointProvider>
    </BrowserRouter>
  );
}

export default App;
