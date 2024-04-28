/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#ffd700",
      },
      screens: {
        customMd: "840px",
      },
    },
  },
  plugins: [require("daisyui")],
};
