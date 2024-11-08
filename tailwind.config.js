// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1F1F1F',
          light: '#2D2D2D',
        },
        purpleAccent: '#7C3AED',
        text: {
          primary: '#FFFFFF',
          secondary: '#A3A3A3',
        },
      },
    },
  },
  plugins: [],
};
