/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F8A6A0",
          200: "#F48C7B",
          300: "#F17356",
          400: "#ED592F",
          500: "#D94D28",
          600: "#F06C4C", // default
          700: "#B23A1D",
          800: "#8C2712",
          900: "#661400",
          950: "#400B00",
        },
        secondary: {
          100: "#F4D2C1",
          200: "#E7B1A4",
          300: "#D99188",
          400: "#CB706B",
          500: "#885133",
          600: "#783E2D", // default
          700: "#683028",
          800: "#582A23",
          900: "#481D1C",
          950: "#381617",
        },
      },
    },
  },
  plugins: [],
};
