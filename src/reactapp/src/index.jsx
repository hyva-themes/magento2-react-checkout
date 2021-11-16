import React from 'react';
import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';

import RootElement from './utils/rootElement';
import CheckoutForm from './app/code/checkoutForm';
import StepProvider from './context/Form/Step/StepProvider';
import AppDataProvider from './context/App/AppDataProvider';
import CartDataProvider from './context/Cart/CartDataProvider';
import CheckoutFormProvider from './context/Form/CheckoutFormProvider';

function Checkout() {
  return (
    <AppDataProvider>
      <CartDataProvider>
        <CheckoutFormProvider>
          <StepProvider>
            <CheckoutForm />
          </StepProvider>
        </CheckoutFormProvider>
      </CartDataProvider>
    </AppDataProvider>
  );
}

ReactDOM.render(<Checkout />, RootElement.getElement());
