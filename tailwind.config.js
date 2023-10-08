/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#00296b',
      'sub': '#fdc500',
      'white': 'white',
      'black': 'black'
    },
    extend: {
      fontFamily: {
        primary: "'Poppins', sans-serif",
      }
    },
  },
  plugins: [require("daisyui")],
}