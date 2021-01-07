import React, { useEffect } from 'react';
import CartItems from './Checkout/CartItems';
import PaymentMethods from './Checkout/PaymentMethods';
import ShippingMethods from './Checkout/ShippingMethods';
import Totals from './Checkout/Totals';
import GuestEmailForm from './Checkout/GuestEmailForm';
import BillingAddressForm from './Checkout/BillingAddressForm';
import ShippingAddressForm from './Checkout/ShippingAddressForm';
import AddressWrapper from './Checkout/AddressWrapper';
import useCartContext from '../hook/useCartContext';
import useAppContext from '../hook/useAppContext';
import PageLoader from './Common/Loader';

function FormStep({ children, className }) {
  return <div className={className}>{children}</div>;
}

function CheckoutForm() {
  const { getGuestCartInfo } = useCartContext();
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

  return (
    <div className="flex flex-col mx-12 my-6 md:flex-row">
      <div className="md:w-1/4">
        <div className="mr-1">
          <FormStep className="space-y-2">
            <GuestEmailForm />
            <AddressWrapper>
              <BillingAddressForm />
              <ShippingAddressForm />
            </AddressWrapper>
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
