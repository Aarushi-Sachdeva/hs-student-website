/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-purple': "#8F8EDB",
      'deep-purple': "#010231",
      'white': "#FFFBFB",
      'sea-green': "#86C5C5",
      'medium-purple': "#2F2963",
      'dusty-pink': "#E9AFBD",
      'lightest-purple': "#faf5ff"


    },

    extend: {
      colors: {
        'primary': "#010231",
        'primary-font': "#FFFBFB",
        'button': "#8F8EDB",
        'input-colour': "#2F2963",
        'outline': "#86C5C5"
      }
    },
  },
  plugins: [],
}