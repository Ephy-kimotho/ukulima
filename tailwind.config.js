/** @type {import('tailwindcss').Config} */

//const {fontFamily} = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        quciksand: ["Quicksand", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        emerald: "#06945d",
        grey: "#8E8E90",
        moldGreen: "#1F4E3C",
        night: "#2D3134",
        tangerine: "#E9591B",
        avocado: "#496C5B",
        mint: "#204E51",
        lightGrey: "#F0F0F0",
      },
      backgroundImage: {
        farmImage: "url('/images/farmImage.png')",
        aboutImageLg: "url('/images/about2.jpg')",
        aboutImageSm: "url('/images/about.jpg')",
        smallPlant: "url('/images/smallPlant.jpg')",
        dairy: "url('/images/dairy.png')",
        contact: "url('/images/contact3.png')",
        mobileContact: "url('/images/contact5.jpg')",
      },
      boxShadow: {
        overlay: "inset 0 0 0 1000px rgba(0,0,0,0.70)",
        translucent: "inset 0 0 0 800px rgba(0,0,0,0.50)",
      },
    },
  },
  plugins: [],
};
