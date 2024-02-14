/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'primary-button': '#FFFF00',
      'primary-text-color': '#FFFFFF',
      'primary-black': '#000000',
      'dark-gray' : '#616161', // dark gray 700
      'medium-gray' : '#C6D3E6', // medium gray 400
      'light-gray' : '#C8C8C8C8', // light gray 200
      'transparent' : '#00FFFFFF', 
    },
    extend: {},
  },
  plugins: [],
}

