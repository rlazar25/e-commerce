/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainBlue': '#003F62',
        'mainYellow': '#EDA415',
        'textColor': '#292D32',
        'whiteColor': '#FFFFFF',
        
      }
    },
  },
  plugins: [],
}