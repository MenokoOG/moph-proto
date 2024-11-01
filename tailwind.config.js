/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleHeart: "#4B0082",
        goldDark: "#b8860b", // Subtler gold color for accents
        black: "#000000",
        grayDark: "#1a1a1a",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
