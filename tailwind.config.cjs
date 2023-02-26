/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        primary: 'var(--color-primary) ',
        secondary: 'var(--color-secondary) ',
        backdrop: 'var(--color-backdrop) ',
        borderColor: 'rgb(74, 74, 74)',
        buttonBackground : '#424242',
        textColorPrimary: '#7b7c7c'
 
      }
    },
  },
  plugins: [],
}