module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      border: "2px",
      sm: "52px",
      xl: "480px",
    },
  },
  variants: {
    extend: { backgroundColor: ["hover"] },
    transitionProperty: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
