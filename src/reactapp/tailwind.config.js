/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');

module.exports = {
  important: true,
  theme: {
    colors: {
      gray: colors.slate,
      green: colors.emerald,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.amber,
      black: '#000000',
      white: '#ffffff',
    },
    extend: {
      colors: {
        primary: {
          lighter: colors.blue['300'],
          DEFAULT: colors.blue['800'],
          darker: colors.blue['900'],
        },
        secondary: {
          lighter: colors.blue['100'],
          DEFAULT: colors.blue['200'],
          darker: colors.blue['300'],
        },
        background: {
          lighter: colors.blue['100'],
          DEFAULT: colors.blue['200'],
          darker: colors.blue['300'],
        },
      },
      textColor: {
        primary: {
          lighter: colors.slate['700'],
          DEFAULT: colors.slate['800'],
          darker: colors.slate['900'],
        },
        secondary: {
          lighter: colors.slate['400'],
          DEFAULT: colors.slate['600'],
          darker: colors.slate['800'],
        },
      },
      backgroundColor: {
        primary: {
          lighter: colors.blue['600'],
          DEFAULT: colors.blue['700'],
          darker: colors.blue['800'],
        },
        secondary: {
          lighter: colors.blue['100'],
          DEFAULT: colors.blue['200'],
          darker: colors.blue['300'],
        },
        container: {
          lighter: '#ffffff',
          DEFAULT: '#fafafa',
          darker: '#f5f5f5',
        },
      },
      borderColor: {
        primary: {
          lighter: colors.blue['600'],
          DEFAULT: colors.blue['700'],
          darker: colors.blue['800'],
        },
        secondary: {
          lighter: colors.blue['100'],
          DEFAULT: colors.blue['200'],
          darker: colors.blue['300'],
        },
        container: {
          lighter: '#f5f5f5',
          DEFAULT: '#e7e7e7',
          darker: '#b6b6b6',
        },
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [forms],
  content: ['./src/**/*.jsx', '../view/frontend/templates/*.phtml'],
};
