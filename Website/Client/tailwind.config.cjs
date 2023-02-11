/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F19E8E",
        secondary: "#58656D",
        tertiary: "#58656D",
      },
    },
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
