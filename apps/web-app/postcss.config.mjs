// Use .mjs for ES Module syntax if your project type is module or use .js for CommonJS
// Ensure your package.json has "type": "module" or use .js extension

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
