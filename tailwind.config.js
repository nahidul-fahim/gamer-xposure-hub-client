/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#00296b',
      'secondary': '#fdc500',
    },
    extend: {
      fontFamily: {
        primary: "'Asap', sans-serif",
      }
    },
  },
  plugins: [require("daisyui")],
}