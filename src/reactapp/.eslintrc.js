module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ["**/*.js?(x)"],
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
    }
  ]
};
