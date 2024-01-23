/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      main: '#1F2937',
      white: '#f9faf8',
      gray: '#e5e7eb',
      blue: '#3882f6',
      dark: '#1f2937'
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}