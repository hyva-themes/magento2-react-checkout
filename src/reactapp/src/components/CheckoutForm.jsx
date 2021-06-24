import React, { useEffect } from 'react';

import Message from './common/Message';
import PageLoader from './common/Loader';
import FormStep from './common/Form/FormStep';
import Login from './login';
import { AddressWrapper } from './address';
import BillingAddress from './billingAddress';
import ShippingAddress from './shippingAddress';
import CartItemsForm from './items';
import ShippingMethodsForm from './shippingMethod';
import PaymentMethod from './paymentMethod';
import Totals from './totals';
import PlaceOrder from './placeOrder';
import CheckoutFormWrapper from './CheckoutFormWrapper';
import useCartContext from '../hook/useCartContext';
import useAppContext from '../hook/useAppContext';

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
          <div className="flex flex-col my-6 md:flex-row">
            <div className="w-full lg:w-3/5 md:mr-2">
              <div className="w-full md:max-w-md xl:max-w-full space-y-2">
                <Login />
                <AddressWrapper>
                  <ShippingAddress />
                  <ShippingMethodsForm />

                  <BillingAddress />
                  <PaymentMethod />
                </AddressWrapper>
              </div>
            </div>

            <div
              className="w-full lg:w-2/5 sticky self-start"
              style={{ top: '100px' }}
            >
              <div className="space-y-2">
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
