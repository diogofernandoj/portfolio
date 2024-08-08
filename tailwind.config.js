/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#00D4FF",
          secondary: "#00A4FF",
          background: "#101010",
          border: "#191919",
          text: "#929292",
        },
      },
    },
  },
  plugins: [],
};
