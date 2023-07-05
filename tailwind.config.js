/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary': '#AB5852',
      'secondary': '#EADAA0',
      'tertiary': '#476066',
      'accent': '#D69E49',
      'shadow': '#838469',
      'white': '#F5F5F5',
      'black': '#0a0a0a',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

