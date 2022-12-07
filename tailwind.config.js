/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffc107',
        'secondary': '#6c757d',
        'orange': '#fd7e14',
        'sky': '#828bb2'
      },
      fontFamily: {
        'popins': ['Popins', 'sans-serif']
      }
    },
  },
  plugins: [],
}