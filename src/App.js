import React, {useContext} from 'react';
import {
  setDefaultBreakpoints,
  BreakpointProvider,
} from 'react-socks';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import MobileNavBar from './components/UI/nav/Mobile/MobileNavBar';
import Hero from './components/hero/Hero';
import Work from './components/work/Work';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { ThemeButton } from './components/UI/ThemeButton';
import { ThemeProvider, ThemeContext} from './components/Context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
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
          <ThemeButton id='theme-toggle-button' onClick={toggleTheme}></ThemeButton>
          <Hero/>
          <Work/>
          <About/>
          <Contact/>
        </div>
      </BreakpointProvider>
    </BrowserRouter>
  );
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);