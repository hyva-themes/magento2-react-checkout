import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutForm from './components/CheckoutForm';
import CheckoutFormProvider from './context/Form/CheckoutFormProvider';
import StepProvider from './context/Form/Step/StepProvider';
import CartDataProvider from './context/Cart/CartDataProvider';
import AppDataProvider from './context/App/AppDataProvider';
import RootElement from './utils/rootElement';

import './tailwind-source.css';

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