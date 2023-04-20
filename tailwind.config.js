/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      serif: ["Italiana", ...defaultTheme.fontFamily.sans],
      sans: ["Italiana", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
