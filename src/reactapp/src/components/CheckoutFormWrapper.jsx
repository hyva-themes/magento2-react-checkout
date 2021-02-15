import React, { useEffect } from 'react';
import { node } from 'prop-types';

import useAppContext from '../hook/useAppContext';
import LS from '../utils/LS';

const customerToken = LS.getCustomerToken();

function CheckoutFormWrapper({ children }) {
  const [
    { isLoggedIn },
    { setPageLoader, getCustomerInfo, getCustomerAddressList },
  ] = useAppContext();

  useEffect(() => {
    if (customerToken) {
      (async () => {
        await getCustomerInfo();
      })();
    }
  }, [setPageLoader, getCustomerInfo]);

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        await getCustomerAddressList();
      })();
    }
  }, [isLoggedIn, getCustomerAddressList]);

  return <>{children}</>;
}

CheckoutFormWrapper.propTypes = {
  children: node.isRequired,
};

export default CheckoutFormWrapper;
