module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '4/5': '80%',
    },
    extend: {
      maxHeight: {
        '92vh': '92vh',
      },
      maxWidth: {
        '180': '180px',
      },
      height: {
        '92vh': '92vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
