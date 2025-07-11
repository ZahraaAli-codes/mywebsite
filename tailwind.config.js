/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Change 'spicy-rice' to 'spicyrice'
        'spicyrice': ['Spicy Rice', 'cursive'], 
      },
    },
  },
  plugins: [],
}