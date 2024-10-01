/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        boruna: ["Boruna", "sans-serif"],
        cerotta: ["Cerotta", "sans-serif"],
      },
    },
  },
  plugins: [],
};
