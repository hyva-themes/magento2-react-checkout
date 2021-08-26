import React, { useEffect } from 'react';

import Login from './login';
import Totals from './totals';
import CartItemsForm from './items';
import PlaceOrder from './placeOrder';
import Message from './common/Message';
import PageLoader from './common/Loader';
import { AddressWrapper } from './address';
import PaymentMethod from './paymentMethod';
import BillingAddress from './billingAddress';
import ShippingAddress from './shippingAddress';
import ShippingMethodsForm from './shippingMethod';
import StickyRightSidebar from './StickyRightSidebar';
import CheckoutAgreements from './checkoutAgreements';
import CheckoutFormWrapper from './CheckoutFormWrapper';
import { config } from '../config';
import { aggregatedQueryRequest } from '../api';
import useAppContext from '../hook/useAppContext';
import useCartContext from '../hook/useCartContext';

function CheckoutForm() {
  const { orderId, storeAggregatedCartStates } = useCartContext();
  const [{ pageLoader }, appActions] = useAppContext();
  const {
    setPageLoader,
    dispatch: appDispatch,
    storeAggregatedAppStates,
  } = appActions;

  useEffect(() => {
    (async () => {
      try {
        setPageLoader(true);
        const data = await aggregatedQueryRequest(appDispatch);
        storeAggregatedCartStates(data);
        storeAggregatedAppStates(data);
        setPageLoader(false);
      } catch (error) {
        setPageLoader(false);
      }
    })();
  }, [
    appDispatch,
    setPageLoader,
    storeAggregatedAppStates,
    storeAggregatedCartStates,
  ]);

  if (orderId && config.isDevelopmentMode) {
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
              <div className="w-full space-y-2 md:max-w-md xl:max-w-full">
                <Login />
                <AddressWrapper>
                  <ShippingAddress />
                  <ShippingMethodsForm />
                  <BillingAddress />
                  <PaymentMethod />
                </AddressWrapper>
              </div>
            </div>

            <StickyRightSidebar>
              <CartItemsForm />
              <Totals />
              <CheckoutAgreements />
              <PlaceOrder />
            </StickyRightSidebar>
          </div>
          {pageLoader && <PageLoader />}
        </div>
      </div>
    </CheckoutFormWrapper>
  );
}

export default CheckoutForm;
