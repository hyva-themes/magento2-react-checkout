/* eslint-disable */
const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  theme: {
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
        orange: colors.orange,
        primary: {
          lighter: colors.gray['700'],
          DEFAULT: colors.gray['800'],
          darker: colors.gray['900'],
        },
        secondary: {
          lighter: colors.gray['400'],
          DEFAULT: colors.gray['600'],
          darker: colors.gray['800'],
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
  variants: {
    extend: {
      borderWidth: ['last', 'hover', 'focus'],
      margin: ['last'],
      opacity: ['disabled'],
      backgroundColor: ['even', 'odd'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
  purge: {
    content: [
      '../../../../../reactapp/src/**/*.jsx',
      '../../../templates/*.phtml',
    ],
  },
};
