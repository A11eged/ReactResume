import React, { createContext, useState, useEffect } from "react";

// Define the context
export const ThemeContext = createContext();

// Define the provider component
export const ThemeProvider = ({ children }) => {
  const storageKey = 'theme-preference';

  const [theme, setTheme] = useState('dark')

  const reflectPreference = (currentTheme) => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  };

  const getColorPreference = () => {
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme) {
      return storedTheme;
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  };

  const toggleTheme = () => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    localStorage.setItem(storageKey, currentTheme);
    reflectPreference(currentTheme);
  };

  useEffect(() => {
    const initialTheme = getColorPreference();
    setTheme(initialTheme);
    reflectPreference(initialTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const mediaQueryChangeHandler = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem(storageKey, newTheme);
      reflectPreference(newTheme);
    };
    
    mediaQuery.addEventListener('change', mediaQueryChangeHandler);

    return () => mediaQuery.removeEventListener('change', mediaQueryChangeHandler);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
