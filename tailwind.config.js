/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4D7DFC",
          light: "#4D7DFC",
          dark: "#4D7DFC",
        },
        light: {
          DEFAULT: "#F5F6F9",
          300: "#D3D7DE",
        },
      },
    },
  },
  plugins: [],
};
