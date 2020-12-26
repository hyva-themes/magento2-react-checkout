import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => (
  <div>
    <link rel="stylesheet" href="https://hyva.io/static/version1608309013/frontend/Hyva/minimal/en_US/css/styles.css"/>
    <Story/>
  </div>
)];
