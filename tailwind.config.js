/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #2b286c 0%, #121212 100%)',
        'header-gradient': 'linear-gradient(180deg, #2c299c 0%, #23216e 100%)',
        'custom-dark-blue': 'rgba(48, 40, 115, 0.7)',
      },
    },
  },
  plugins: [],
}
