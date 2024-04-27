import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        'orange-500': '#ff8a05',
        'yellow-400': '#f9b331',
      },
      textShadow: {
        'lg': '0 0 18px rgba(248, 190, 42, 0.8)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};