import React from 'react';
import ReactDOM from 'react-dom';

import RootElement from './utils/rootElement';
import CheckoutForm from './app/code/checkoutForm';
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

ReactDOM.render(<Checkout />, RootElement.getElement());
