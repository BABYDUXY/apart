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
      keyframes: {
        swipeX: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-50px)" },
        },
        swipeX2: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-30px)" },
        },
        wave: {
          "0%": { transform: "translateX(0) " },
          "50%": { transform: "translateX(-40%) " },
          "100%": { transform: "translateX(0) " },
        },
        waveBob: {
          "0%": { transform: "translateY(0px)" },

          "50%": { transform: "translateY(10px)" },

          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        swipeX: "swipeX 2s ease-in-out infinite",
        swipeX2: "swipeX2 2s ease-in-out infinite",
        wave: "wave 10s  ease-in-out infinite",
        waveBob: "waveBob 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
