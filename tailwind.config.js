/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/daisyui/dist/**/*.js',
    './node_modules/react-daisyui/dist/**/*.js'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["black"],
          primaryContent: "white",
          backgroundColor: "#1a1c1f",
        },
      },
    ],
  },
}

