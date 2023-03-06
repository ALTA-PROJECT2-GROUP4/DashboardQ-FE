/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#232932",
        color2: "#EBECF1",
        color3: "#1F4068",
        color4: "#395B64",
      },
    },
  },
  plugins: [require("daisyui"), require("prettier-plugin-tailwindcss")],
  daisyui: {
    themes: false,
  },
};
