module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '4/5': '80%',
    },
    extend: {
      fontSize: {
        '2xs': ['0.65rem', {
          lineHeight: '1rem',
        }],
      },
      maxHeight: {
        '92vh': '92vh',
      },
      maxWidth: {
        '220': '220px',
      },
      height: {
        '92vh': '92vh',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
    },
  },
  plugins: [],
}
