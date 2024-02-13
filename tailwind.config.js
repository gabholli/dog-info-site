/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'arial': ['Arial', 'Helvetica', 'sans-serif'],
    },
    extend: {
      minHeight: {
        screen: ["100vh", "100svh"]
      }
    }
  },
  plugins: [],
}