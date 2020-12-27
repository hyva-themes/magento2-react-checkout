import React from 'react';
import CartItems from './Checkout/CartItems';
import PaymentMethods from './Checkout/PaymentMethods';
import ShippingMethods from './Checkout/ShippingMethods';
import Totals from './Checkout/Totals';
import GuestEmailForm from './Checkout/GuestEmailForm';
import BillingAddressForm from './Checkout/BillingAddressForm';
import ShippingAddressForm from './Checkout/ShippingAddressForm';

function FormStep({ children, className }) {
  return <div className={className}>{children}</div>;
}

function CheckoutForm() {
  return (
    <div className="flex flex-col mx-12 my-6 md:flex-row">
      <div className="md:w-1/4">
        <div className="mr-1">
          <FormStep className="space-y-2">
            <GuestEmailForm />
            <BillingAddressForm />
            <ShippingAddressForm />
          </FormStep>
        </div>
      </div>

      <div className="md:w-2/4">
        <div className="mx-1 space-y-2">
          <FormStep>
            <ShippingMethods />
          </FormStep>

          <FormStep>
            <PaymentMethods />
          </FormStep>
        </div>
      </div>

      <div className="flex-grow">
        <div className="ml-1 space-y-2">
          <CartItems />
          <Totals />
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
