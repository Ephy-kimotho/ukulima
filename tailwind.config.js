/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        quciksand: ["Quicksand", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        emerald: "#06945d",
        grey: "#8E8E90",
        moldGreen: "#1F4E3C",
        night: "#2D3134",
        tangerine: "#E9591B",
        avocado: "#496C5B",
      },
      backgroundImage: {
        farmImage: "url('/images/farmImage.png')",
        aboutImage: "url('/images/about.jpg')",
        smallPlant: "url('/images/smallPlant.jpg')",
        dairy: "(url('/images/dairy.png'))",
      },
      boxShadow: {
        overlay: "inset 0 0 0 1000px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
