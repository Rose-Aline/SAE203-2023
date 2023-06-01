/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      darkbrown: '#CCB28C',
      beige: '#EFE2CF',
      backgroundbeige: '#F6F7EE',
      orange: '#DA781D',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
    },
    fontFamily: {
      Alegreya: ['Alegreya', 'serif'],
      Roboto: ['Roboto', 'sans-serif'],
      Ubuntu: ['Ubuntu', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      }
    }
  },
  plugins: [] ,

  

 }
