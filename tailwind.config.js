module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Epilogue', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    colors: {
      primary: '#1534B1',
    },
    extend: {
      backgroundImage: theme => ({
        'banner': "url('https://res.cloudinary.com/pv-duc/image/upload/v1624041874/portfolio-banner.svg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
