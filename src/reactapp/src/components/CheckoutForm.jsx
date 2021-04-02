import React, { useEffect } from 'react';

import Totals from './Checkout/Totals';
import GuestEmailForm from './Checkout/GuestEmailForm';
import BillingAddressForm from './Checkout/BillingAddressForm';
import ShippingAddressForm from './Checkout/ShippingAddressForm';
import AddressWrapper from './Checkout/AddressWrapper';
import useCartContext from '../hook/useCartContext';
import useAppContext from '../hook/useAppContext';
import PageLoader from './Common/Loader';
import CartItemsForm from './Checkout/CartItemsForm';
import ShippingMethodsForm from './Checkout/ShippingMethodsForm';
import PlaceOrder from './Checkout/PlaceOrder';
import PaymentMethodsForm from './Checkout/PaymentMethodsForm';
import Message from './Common/Message';
import CheckoutFormWrapper from './CheckoutFormWrapper';
import ShippingAddress from './shippingAddress';

function FormStep({ children, className }) {
  return <div className={className}>{children}</div>;
}

function CheckoutForm() {
  const { orderId, getGuestCartInfo } = useCartContext();
  const [{ pageLoader }, { setPageLoader }] = useAppContext();

  useEffect(() => {
    (async () => {
      setPageLoader(true);
      await getGuestCartInfo();
      setPageLoader(false);
    })();
  }, [getGuestCartInfo, setPageLoader]);

  if (pageLoader) {
    return <PageLoader />;
  }

  if (orderId) {
    return (
      <div className="flex flex-col items-center justify-center mx-10 my-10">
        <h1 className="text-2xl font-bold">Order Details</h1>
        <div className="flex flex-col items-center justify-center mt-4 space-y-3">
          <div>Your order is placed.</div>
          <div>{`Order Number: #${orderId}`}</div>
        </div>
      </div>
    );
  }

  return (
    <CheckoutFormWrapper>
      <Message />
      <div className="flex flex-col flex-wrap mx-12 my-6 md:flex-row">
        <div className="md:w-1/4">
          <div className="mr-1">
            <FormStep className="space-y-2">
              <GuestEmailForm />
              <AddressWrapper>
                <BillingAddressForm />
                <ShippingAddress />
                {/* <ShippingAddressForm /> */}
              </AddressWrapper>
            </FormStep>
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="mx-1 space-y-2">
            <FormStep>
              <ShippingMethodsForm />
            </FormStep>

            <FormStep>
              <PaymentMethodsForm />
            </FormStep>
          </div>
        </div>

        <div className="flex-grow">
          <div className="ml-1 space-y-2">
            <CartItemsForm />
            <Totals />
            <PlaceOrder />
          </div>
        </div>
      </div>
    </CheckoutFormWrapper>
  );
}

export default CheckoutForm;
