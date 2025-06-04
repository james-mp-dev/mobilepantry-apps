import type { Config } from 'tailwindcss';

// Correctly require the theme. Since theme's main points to dist/index.js,
// and that file default exports the config, we access .default.
const sharedTheme = require('@mobilepantry/theme').default;

const config: Config = {
  presets: [sharedTheme],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Include paths from shared ui package if it uses tailwind directly
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      // You can extend the shared theme here if needed
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
