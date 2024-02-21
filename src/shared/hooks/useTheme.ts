import { useState } from 'react';

interface IUseTheme {
  toggleTheme: () => void;
}

enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export const useTheme = (): IUseTheme => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? Theme.LIGHT);

  document.documentElement.classList.add(theme);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = '';
    document.documentElement.classList.add(newTheme);
  };

  return {
    toggleTheme
  };
};
