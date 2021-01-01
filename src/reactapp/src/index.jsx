import React from 'react';
import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';

import CheckoutForm from './components/CheckoutForm';
import CheckoutFormProvider from './context/Form/CheckoutFormProvider';
import StepProvider from './context/Form/Step/StepProvider';
import CartDataProvider from './context/Cart/CartDataProvider';
import AppDataProvider from './context/App/AppDataProvider';

import './tailwind.output.css';

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
const RootElement = document.getElementById('react-checkout');

ReactDOM.render(<Checkout />, RootElement);
