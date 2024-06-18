/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Retaining your custom font
      },
      borderRadius: {
        '2xl': '1rem', // Custom radius for rounded corners
      },
      colors: {
        'blue-start': '#00C6FF',  // Starting color of the gradient
        'blue-end': '#0072FF',    // Ending color of the gradient
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))', // Horizontal gradient
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
      }),
      boxShadow: {
        'custom-md': '0 4px 6px rgba(0, 0, 0, 0.4)', // Custom medium shadow
        'custom-high': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.5)' // Heavier shadow
      }
    },
  },
  plugins: [],
}
