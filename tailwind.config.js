module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple-dark': '#3F3D56',
        'purple-light': '#575A89',
        'blue-dark': '#00ACDD',
        'blue-light': '#19CDFF',
        'green-dark': '#2F9A2D',
        'green-light': '#7FFF7C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
