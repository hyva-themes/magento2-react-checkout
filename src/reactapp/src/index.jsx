import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Main as MainLayout } from './components/Layouts/Main';
import ContextProvider from './context/ContextProvider';
import CheckoutForm from './components/CheckoutForm';
import CheckoutFormProvider from './context/Form/CheckoutFormProvider';
import StepProvider from './context/Form/Step/StepProvider';
import './tailwind.output.css';
import CartDataProvider from './context/Cart/CartDataProvider';

function Checkout() {
  return (
    <>
      {/* <ContextProvider>
        <MainLayout />
      </ContextProvider> */}
      <CartDataProvider>
        <CheckoutFormProvider>
          <StepProvider>
            <CheckoutForm />
          </StepProvider>
        </CheckoutFormProvider>
      </CartDataProvider>
    </>
  );
}
const RootElement = document.getElementById('react-checkout');

ReactDOM.render(<Checkout />, RootElement);
