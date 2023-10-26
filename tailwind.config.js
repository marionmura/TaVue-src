/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme:  {
    colors: {
      white: '#ffffff',
      black: '#000000',
      violet:'#DF85FF',
      gris:'#DCD7FF',
      bleu:'#416BFF',
      grisclair:'#FCF5FF',
    },
    fontFamily: {
      anek: "Anek Bangla",
    },
    extend: {},
  },
  plugins: [],
}

