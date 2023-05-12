import React, { useEffect, useState } from 'react';

import Login from '../login';
import Totals from '../totals';
import CartItemsForm from '../items';
import PlaceOrder from '../placeOrder';
import CouponCode from '../couponCode';
import Message from '../common/Message';
import PageLoader from '../common/Loader';
import { AddressWrapper } from '../address';
import PaymentMethod from '../paymentMethod';
import BillingAddress from '../billingAddress';
import ShippingAddress from '../shippingAddress';
import ShippingMethodsForm from '../shippingMethod';
import StickyRightSidebar from '../StickyRightSidebar';
import CheckoutAgreements from '../checkoutAgreements';
import { config } from '../../config';
import { aggregatedQueryRequest } from '../../api';
import LocalStorage from '../../utils/localStorage';
import useCheckoutFormContext from '../../hook/useCheckoutFormContext';
import useCheckoutFormAppContext from './hooks/useCheckoutFormAppContext';
import useCheckoutFormCartContext from './hooks/useCheckoutFormCartContext';

function CheckoutForm() {
  const [isRequestSent, setIsRequestSent] = useState(false);
  const { storeAggregatedFormStates } = useCheckoutFormContext();
  const { orderId, isVirtualCart, storeAggregatedCartStates } =
    useCheckoutFormCartContext();
  const { pageLoader, appDispatch, setPageLoader, storeAggregatedAppStates } =
    useCheckoutFormAppContext();

  /**
   * Collect App, Cart data when the page loads.
   */
  useEffect(() => {
    if (isRequestSent) {
      return;
    }

    if (!LocalStorage.getCartId()) {
      LocalStorage.saveCartId(config.cartId);
    }

    (async () => {
      try {
        setPageLoader(true);
        setIsRequestSent(true);
        const data = await aggregatedQueryRequest(appDispatch);
        storeAggregatedCartStates(data);
        storeAggregatedAppStates(data);
        storeAggregatedFormStates(data);
      } catch (error) {
        console.error(error);
      } finally {
        setPageLoader(false);
      }
    })();
  }, [
    appDispatch,
    isRequestSent,
    setPageLoader,
    storeAggregatedAppStates,
    storeAggregatedCartStates,
    storeAggregatedFormStates,
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
    <>
      <Message />
      <div className="flex justify-center">
        <div className="container">
          <div className="flex flex-col my-6 space-y-2 md:flex-row md:space-y-0">
            <div className="w-full lg:w-3/5 md:mr-2">
              <div className="w-full space-y-2 md:max-w-md xl:max-w-full">
                <Login />
                <AddressWrapper>
                  {!isVirtualCart && <ShippingAddress />}
                  <BillingAddress />
                  {!isVirtualCart && <ShippingMethodsForm />}
                  <PaymentMethod />
                  <CouponCode />
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
    </>
  );
}

export default CheckoutForm;
