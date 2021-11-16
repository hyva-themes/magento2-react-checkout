import React from 'react';

import Login from './login';
import Totals from './totals';
import CartItemsForm from './items';
import { AddressWrapper } from './address';
import { Message } from '../../code/common';
import PaymentMethod from './paymentMethod';
import BillingAddress from './billingAddress';
import ShippingAddress from './shippingAddress';
import PageLoader from '../../code/common/Loader';
import ShippingMethodsForm from './shippingMethod';
import StickyRightSidebar from './StickyRightSidebar';
import CheckoutAgreements from './checkoutAgreements';
import { PlaceOrder } from '../../code/placeOrder/components';
import {
  useCheckoutFormAppContext,
  useCheckoutFormCartContext,
} from '../../code/checkoutForm/hooks';

function Index() {
  const { pageLoader } = useCheckoutFormAppContext();
  const { isVirtualCart } = useCheckoutFormCartContext();

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
                  {!isVirtualCart && (
                    <>
                      <ShippingAddress />
                      <ShippingMethodsForm />
                    </>
                  )}
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
    </>
  );
}

export default Index;
