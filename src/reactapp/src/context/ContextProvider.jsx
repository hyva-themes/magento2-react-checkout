import React from 'react';

import { AppContextProvider } from './App';
import { CartContextProvider } from './Cart';
import { FormikContextProvider } from './Formik';

const contextProviders = [
  FormikContextProvider,
  AppContextProvider,
  CartContextProvider,
];

const ContextProvider = ({ children }) =>
  contextProviders.reduceRight(
    (memo, Provider) => <Provider>{memo}</Provider>,
    children
  );

export default ContextProvider;
