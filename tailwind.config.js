module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Epilogue', 'sans-serif'],
    },
    extend: {
      // backgroundImage: theme => ({
      //   'banner': "url('../images/portfolio-banner.svg')",
      // })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
