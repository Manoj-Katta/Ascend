/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A071FF', // set primary color
        'primary-tint': 'rgba(189,170,255,1)', // set primary tint color
        'primary-shade': 'rgba(209,162,255,1)', // set primary shade color
      },
    },
  },
  darkMode: 'class', // set dark mode to class
  plugins: [],
};
