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
        "no-ios": { raw: "(pointer: fine)" },
        "is-ios": { raw: "-webkit-overflow-scrolling: touch" },
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
        swipeXSmall: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-40px)" },
        },
        swipeX2Small: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-20px)" },
        },
        swipeY2: {
          "0%, 100%": { transform: "translateY(0px) " },
          "50%": { transform: "translateY(-30px) " },
        },
        swipeY2Small: {
          "0%, 100%": { transform: "translateY(0px) " },
          "50%": { transform: "translateY(-20px) " },
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
        swipeY2: "swipeY2 2s ease-in-out infinite",
        /* Za short breakpoint */
        swipeXSmall: "swipeXSmall 2s ease-in-out infinite",
        swipeX2Small: "swipeX2Small 2s ease-in-out infinite",
        swipeY2Small: "swipeY2Small 2s ease-in-out infinite",
        /* ------------------ */
        wave: "wave 13s  ease-in-out infinite",
        waveBob: "waveBob 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
