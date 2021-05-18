const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');
const customFormsPlugin = require('@tailwindcss/custom-forms');

const customMinHeightPlugin = plugin(({ addComponents, theme }) => {
  const minHeights = {
    '.min-h-10': {
      minHeight: theme('spacing.10'),
    },
    '.min-h-12': {
      minHeight: theme('spacing.12'),
    },
  };

  addComponents(minHeights);
});

module.exports = {
  important: true,
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      teal: colors.teal,
      primary: {
        lighter: colors.blue['300'],
        default: colors.blue['500'],
        darker: colors.blue['600'],
      },
      secondary: {
        lighter: colors.blue['100'],
        default: colors.blue['200'],
        darker: colors.blue['300'],
      },
      background: {
        lighter: colors.blue['100'],
        default: colors.blue['200'],
        darker: colors.blue['300'],
      },
      container: {
        lighter: colors.white,
        default: colors.gray['100'],
        darker: colors.gray['200'],
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
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
    margin: ['responsive', 'last', 'hover', 'focus'],
  },
  plugins: [customFormsPlugin, customMinHeightPlugin],
  purge: {
    content: [
      './src/components/*.jsx',
      './src/components/**/*.jsx',
      '../view/frontend/templates/*.phtml',
    ],
  },
};
