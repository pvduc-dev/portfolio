module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      black: '#333',
      primary: '#1534B1',
      secondary: '#D2D9F3',
      accent: '#333',
      error: '#ff5252'
    },
  },
  variants: {
    extend: {

    }
  }
};
