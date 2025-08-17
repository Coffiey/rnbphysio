const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',   // or './pages/**/*.{js,ts,jsx,tsx}' depending on your router
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}