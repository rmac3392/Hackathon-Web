/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2a2d57",
        secondary: "#DDD3DD",
        ternary: "#94A3B8",
        active: "#E5E5E5",
        stroke: "#818589",
      },
    },
  },
  plugins: [],
};
