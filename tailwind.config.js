module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Epilogue', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      white: '#FFF',
      black: '#333',
      primary: '#1534B1',
      accent: '#333'
    },
    extend: {
      backgroundImage: theme => ({
        'banner': "url('https://res.cloudinary.com/pv-duc/image/upload/v1624210477/portfolio-banner.svg')",
      })
    }
  },
};
