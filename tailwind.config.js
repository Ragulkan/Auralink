module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 80s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }, // Adjust based on content width
        },
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};