/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
