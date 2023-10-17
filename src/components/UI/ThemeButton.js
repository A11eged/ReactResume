import React from 'react';
import styles from './ThemeButton.module.css';

export const ThemeButton = ({onClick}) => {
  return (
    <button className={styles.themeToggle} aria-label="auto" aria-live="polite" onClick={onClick}>
      <svg className={styles.sunAndMoon} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        <mask className={styles.moon} id='moonmask'>
          <rect x="0" y="0" width="100%" height="100%" fill='#f5f5f5' />
          <circle cx="24" cy="10" r="6" fill='black'/>
        </mask>
        <circle className={styles.sun} cx="12" cy="12" r="6" mask="url(#moonmask)" fill="var(--icon-fill)" />
        <g className={styles.sunBeams} stroke={styles.sunBeams.stroke}>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
}