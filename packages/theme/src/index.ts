import type { Config } from 'tailwindcss';

const themeConfig: Partial<Config> = {
  // Example shared theme configuration
  // You can define colors, spacing, typography, etc.
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#67e8f9', // cyan-300
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#0e7490', // cyan-700
        },
        secondary: {
          light: '#f9a8d4', // pink-300
          DEFAULT: '#ec4899', // pink-500
          dark: '#be185d', // pink-700
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: using Inter font
      },
    },
  },
  plugins: [
    // Add any shared Tailwind plugins here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};

export default themeConfig;
