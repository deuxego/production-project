/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true
      }
    },
    fontFamily: {
      oxygen: ['Oxygen', 'sans-serif'],
      inconsolata: ['Inconsolata', 'monospace']
    },
    colors: {
      bg_primary: 'var(--bg-color)',
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',

      'bg_dark-primary': 'var(--dark-bg-color)',
      'dark-primary': 'var(--dark-primary-color)',
      'dark-secondary': 'var(--dark-secondary-color)',
      ...colors
    }
  },
  plugins: []
};
