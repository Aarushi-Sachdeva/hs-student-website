/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          gray: colors.stone,
          'primary': "#010231",
          'primary-font': "#FFFBFB",
          'button': "#8F8EDB",
          'input-colour': "#2F2963",
          'outline': "#86C5C5",
        },
        animation: {
          typing: 'typing 5s infinite steps(34)',
        }
      },
      keyframes: {
        shimmer: {
          '50%': {
            transform: 'translateX(90%)',
          },
          '100%': {
            transform: 'translateX(-90%)',
          },
        },
        typing: {
          // '0%': {
          //   width: '0',
          // },
          // '80%': {
          //   width: '34ch',
          // },
          // '100%': {
          //   width: '34ch',
          // },
        },
      },
    },
    plugins: [],
  }