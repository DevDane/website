/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      minHeight: {
        "fill-screen": ["100vh", "100dvh"],
      },

      colors: {
        "default": "#212a3b",
        "default-light": "#B7C2D7",
        "default-border": "#40516d",

        "ldefault": "#ffffff",
        "ldefault-light": "#3a4b68",
        "ldefault-border": "#B7C2D7",
      }
    },
  },
  plugins: [],
};
