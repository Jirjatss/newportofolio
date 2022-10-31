/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        85: "355px",
        90: "900px",
      },
      fontFamily: {
        signika: ["Signika Negative"],
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
