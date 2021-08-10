module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'react/no-danger': 0,
  },
};
