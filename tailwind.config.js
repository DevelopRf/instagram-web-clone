/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btnBg: "#0095f6",
        colorFb: "#385185"
      }
    },
  },
  plugins: [],
}

