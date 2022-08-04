/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black.7': 'rgba(0, 0, 0, 0.7)',
        'black.5': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
