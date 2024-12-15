// /** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // All Tailwind classes will have higher specificity
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tell Tailwind to scan for these file types in your project
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Default sans-serif font
      },
    }, // Use this to customize the Tailwind theme (optional)
  },
  plugins: [
    require('tailwind-scrollbar'), // Add the scrollbar plugin here
  ],
}


