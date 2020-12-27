import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Main as MainLayout } from './components/Layouts/Main';
import ContextProvider from './context/ContextProvider';
import CheckoutForm from './components/CheckoutForm';
import CheckoutFormProvider from './context/checkoutForm/CheckoutFormProvider';
import StepProvider from './context/checkoutForm/Step/StepProvider';
import './tailwind.output.css';

function Checkout() {
  return (
    <>
      {/* <ContextProvider>
        <MainLayout />
      </ContextProvider> */}
      <CheckoutFormProvider>
        <StepProvider>
          <CheckoutForm />
        </StepProvider>
      </CheckoutFormProvider>
    </>
  );
}
const RootElement = document.getElementById('react-checkout');

ReactDOM.render(<Checkout />, RootElement);
