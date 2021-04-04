module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3f72af",
        "primary-tint": "#8caacf",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
