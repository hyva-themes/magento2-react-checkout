import { render } from "preact";

import CheckoutForm from './components/CheckoutForm';
import CheckoutFormProvider from './context/Form/CheckoutFormProvider';
import StepProvider from './context/Form/Step/StepProvider';
import CartDataProvider from './context/Cart/CartDataProvider';
import AppDataProvider from './context/App/AppDataProvider';
import RootElement from './utils/rootElement';

import './styles.css'

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

render(<Checkout />, RootElement.getElement());
