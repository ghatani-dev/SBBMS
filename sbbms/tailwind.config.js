/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#C62828',
        secondary: '#FFFFFF',
        accent: '#333333',
        success: '#2E7D32',
        warning: '#F57C00',
        background: '#F5F5F5',
        gray: {
          100: '#F5F5F5',
          300: '#E0E0E0',
          500: '#9E9E9E',
          800: '#424242',
          900: '#333333',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Or we can rely on default and load Roboto custom font
      }
    },
  },
  plugins: [],
}
