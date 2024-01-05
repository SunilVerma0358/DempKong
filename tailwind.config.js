/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        loader: "loader 4s linear infinite",
        BacktoTop: "BacktoTop 3s linear infinite",
        HeroImg: " hearderImg 4s linear infinite",
        HeroImg1: " hearderImg2 4s linear infinite",
      },
      keyframes: {
        BacktoTop: {
          "0%": { "transform ": "translateY(0)" },
          "50%": { "transform ": "translateY(15%)" },
          "100%": { "transform ": "translateY(0)" },
        },
        loader: {
          "0%": { transform: "scale(100%)" },
          "50%": { transform: "scale(110%)" },
          "100%": { transform: "scale(100%)" },
        },
        hearderImg: {
          "0%": { "transform ": "translateY(0)" },
          "50%": { "transform ": "translateY(5%)" },
          "100%": { "transform ": "translateY(0)" },
        },
        hearderImg2: {
          "0%": { "transform ": "translateY(0)" },
          "50%": { "transform ": "translateY(5%)" },
          "100%": { "transform ": "translateY(0)" },
        },
      },
      backgroundSize: {
        CoverImg: ["cover"],
      },
      boxShadow: {
        buttonShadow: [" 0px 4px 16px 0px rgba(253, 218, 96, 0.50)"],
        cardShadow: ["0px 14px 56px 0px rgba(253, 218, 96, 0.50)"],
        lineShadow: ["0px 4px 4px 0px rgba(0, 0, 0, 0.25)"],
      },
      fontFamily: {
        AzoSans: ["Azo Sans Uber W01 Regular"],
        Montserrat: ["Montserrat"],
      },
      dropShadow: {
        dropShadowS: ["0px 14px 56px 0px rgba(253, 218, 96, 0.50)"],
      },
    },
  },
  plugins: [],
};
