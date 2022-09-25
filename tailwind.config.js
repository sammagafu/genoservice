/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        bebas: '"Bebas Neue",serif',
        pop: "'Poppins',serif",
      }
    },
  },
  plugins: [],
}
