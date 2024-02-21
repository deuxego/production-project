/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      oxygen: ['Oxygen', 'sans-serif'],
      inconsolata: ['Inconsolata', 'monospace'],
    },
    colors: {
      'bg_primary': 'var(--bg-color)',
      'primary': 'var(--primary-color)',
      'secondary': 'var(--secondary-color)',

      'bg_dark-primary': 'var(--dark-bg-color)',
      'dark-primary': 'var(--dark-primary-color)',
      'dark-secondary': 'var(--dark-secondary-color)'
    }
  },
  plugins: []
};
