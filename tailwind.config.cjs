/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      main: "#0B090D",
      white: "#fff",
      pink: {
        100: "#F2C3E6",
        200: "#F29FDD",
        300: "#E96BC8",
        400: "#D830AD",
      },

      purple: {
        100: "#D4D0FF",
        200: "#C4BEFF",
        300: "#A299FF",
        400: "#6556FF",
      },
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }

  },
  plugins: [],
};

    