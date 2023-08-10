'use client';

import clsx from 'clsx';
import React from 'react';
import { Moon, Rss, Sun } from 'react-feather';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';

import { DARK_TOKENS, LIGHT_TOKENS } from '@/constants';
import Cookies from 'js-cookie';
import styles from './Header.module.css';

function Header({ theme: initialTheme, className, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function switchTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);

    Cookies.set('color-theme', nextTheme, { expires: 1000 });

    const COLORS = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

    const root = document.documentElement;

    root.setAttribute('data-color-theme', nextTheme);

    for (const [key, value] of Object.entries(COLORS)) {
      root.style.setProperty(key, value);
    }
  }

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>

        <button className={styles.action} onClick={() => switchTheme()}>
          {theme === 'light' ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
