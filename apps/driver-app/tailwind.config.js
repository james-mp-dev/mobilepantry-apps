// apps/driver-app/tailwind.config.js
const sharedTheme = require('@mobilepantry/theme').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}", // If you create a src folder
    "../../packages/ui/src/native/**/*.{js,jsx,ts,tsx}" // Path to shared native UI components
  ],
  presets: [sharedTheme],
  theme: {
    extend: {
      // Add any app-specific overrides here
    },
  },
  plugins: [],
};
