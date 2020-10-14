import React from 'react';

import { AppContextProvider } from './App';
import { CartContextProvider } from './Cart';
import { FormikContextProvider } from './Formik';

// import CheckoutContextProvider from '../context/checkout';
// import ErrorContextProvider from '../context/unhandledErrors';
// import UserContextProvider from '../context/user';

const contextProviders = [
    // ErrorContextProvider,
    FormikContextProvider,
    // UserContextProvider,
    AppContextProvider,
    // CheckoutContextProvider
    CartContextProvider,
];

const ContextProvider = ({ children }) => {
    return contextProviders.reduceRight((memo, ContextProvider) => {
        return <ContextProvider>{memo}</ContextProvider>;
    }, children);
};

export default ContextProvider;
