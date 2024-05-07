/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        intro: "url('/img/slikica2.jpg')",
      },
      fontFamily: {
        main: " 'Podkova', serif;",
      },
      colors: {
        plava: "#2C6585",
      },
      screens: {
        long_sm: { raw: "(min-height:800px) or (orientation:landscape)" },
        xs: "530px",
        lg: "1025px",
        short: { raw: "(max-height:700px)" },
        ultra_short: { raw: "(max-height:640px)" },
      },
    },
  },
  plugins: [],
};
