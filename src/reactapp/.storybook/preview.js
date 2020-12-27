import React from 'react';
import '../src/tailwind.output.css';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => (
  <div>
    <Story/>
  </div>
)];
