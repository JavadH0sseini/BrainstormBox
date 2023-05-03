/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      Lilita: ["Lilita One", "cursive"],
    },
    extend: {
      spacing: {},
      borderRadius: {},
      boxShadow: {
        btn: "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
        btnh: "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 6px 6px 0px 0px, 7px 7px 0px 0px",
      },
      colors: {
        primary: "#ffffff",
        secondary: "#ffffff",
        accent: "#ffffff",
      },
    },
  },
  plugins: [],
};
