// /** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // All Tailwind classes will have higher specificity
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tell Tailwind to scan for these file types in your project
  ],
  theme: {
    extend: {}, // Use this to customize the Tailwind theme (optional)
  },
  plugins: [],
}


