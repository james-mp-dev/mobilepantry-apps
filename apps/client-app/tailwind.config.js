// apps/client-app/tailwind.config.js
const sharedTheme = require('@mobilepantry/theme').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/native/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [sharedTheme],
  theme: {
    extend: {},
  },
  plugins: [],
};
