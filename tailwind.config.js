/** @type {import('tailwindcss').Config} */
const {fontFamily} = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontFamily:{
        nunito:["Nunito", "sans-serif"]
      },

      backgroundImage: {
        contact: "url('/images/contact3.png')"
      },

      boxShadow: {
        overlay: "inset 0 0 0 1000px rgba(0,0,0,0.70)"
      }
    },
  },
  plugins: [],
};
