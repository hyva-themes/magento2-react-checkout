import React, { useEffect } from 'react';

import Message from './common/Message';
import PageLoader from './common/Loader';
import Login from './login';
import { AddressWrapper } from './address';
import BillingAddress from './billingAddress';
import ShippingAddress from './shippingAddress';
import CartItemsForm from './items';
import ShippingMethodsForm from './shippingMethod';
import PaymentMethod from './paymentMethod';
import Totals from './totals';
import PlaceOrder from './PlaceOrder';
import CheckoutFormWrapper from './CheckoutFormWrapper';
import useCartContext from '../hook/useCartContext';
import useAppContext from '../hook/useAppContext';

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
      <div className="flex justify-center">
        <div className="container">
          <div
            className={`${
              pageLoader ? 'hidden' : 'flex flex-col my-6 md:flex-row space-y-2'
            }`}
          >
            <div className="md:w-1/4">
              <div className="mt-2 md:pr-1">
                <FormStep className="space-y-2">
                  <Login />
                  <AddressWrapper>
                    <BillingAddress />
                    <ShippingAddress />
                  </AddressWrapper>
                </FormStep>
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="space-y-2 md:px-1">
                <FormStep>
                  <ShippingMethodsForm />
                </FormStep>

                <FormStep>
                  <PaymentMethod />
                </FormStep>
              </div>
            </div>

            <div className="flex-grow">
              <div className="space-y-2 md:pl-1">
                <CartItemsForm />
                <Totals />
                <PlaceOrder />
              </div>
            </div>
          </div>
          {pageLoader && <PageLoader />}
        </div>
      </div>
    </CheckoutFormWrapper>
  );
}

export default CheckoutForm;
