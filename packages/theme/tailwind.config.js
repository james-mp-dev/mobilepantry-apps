// packages/theme/tailwind.config.js
/** @type {import('tailwindcss').Config} */
const sharedTheme = require('./dist/index.js').default; // Or .default if it's a default export

module.exports = {
  // This content array is mostly for tooling within this package if any.
  // Consuming apps will have their own content arrays.
  content: ['./src/**/*.{js,ts,jsx,tsx}'], 
  presets: [sharedTheme], // Apps will use this preset.
  theme: {
    extend: {
      // You can add minor overrides specific to this package's internal tooling if needed
    },
  },
  plugins: [
    // Plugins are usually inherited from the preset (sharedTheme)
  ],
};
