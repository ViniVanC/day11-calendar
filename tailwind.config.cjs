/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#99b898",
        yellow: "#feceab",
        lightPink: "#ff847c",
        pink: "#e84a5f",
        black: "#2a363b",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowPink":
          "linear-gradient(45deg, rgba(254,206,171,1) 0%, rgba(255,132,124,1) 100%)",
      }),
      fontFamily: {
        BungeeShade: ["Bungee Shade", "cursive"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
