import React from 'react';
import 'react-app-polyfill/ie11';
import { createRoot } from 'react-dom/client';

import RootElement from './utils/rootElement';
import CheckoutForm from './components/CheckoutForm';
import AppDataProvider from './context/App/AppDataProvider';
import CartDataProvider from './context/Cart/CartDataProvider';
import CheckoutFormProvider from './context/Form/CheckoutFormProvider';

import './index.css';

function Checkout() {
  return (
    <AppDataProvider>
      <CartDataProvider>
        <CheckoutFormProvider>
          <CheckoutForm />
        </CheckoutFormProvider>
      </CartDataProvider>
    </AppDataProvider>
  );
}

const root = createRoot(RootElement.getElement());

root.render(<Checkout />);
