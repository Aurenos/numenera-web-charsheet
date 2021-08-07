module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Lora', 'serif'],
      header: ['Cinzel Decorative'],
    },
  },
  variants: {
    extend: { ringWidth: ['hover'] },
  },
  plugins: [],
};
