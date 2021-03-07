import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';

import useAppContext from '../hook/useAppContext';
import LocalStorage from '../utils/localStorage';

function CheckoutFormWrapper({ children }) {
  const customerToken = LocalStorage.getCustomerToken();
  const [customerFetched, setCustomerFetched] = useState('');
  const [addressFetched, setAddressFetched] = useState('');
  const [
    { isLoggedIn },
    { setPageLoader, getCustomerInfo, getCustomerAddressList },
  ] = useAppContext();

  useEffect(() => {
    if (customerToken && customerToken !== customerFetched) {
      (async () => {
        setCustomerFetched(customerToken);
        await getCustomerInfo();
      })();
    }
  }, [customerToken, customerFetched, setPageLoader, getCustomerInfo]);

  useEffect(() => {
    if (isLoggedIn && addressFetched !== customerToken) {
      (async () => {
        setAddressFetched(customerToken);
        await getCustomerAddressList();
      })();
    }
  }, [customerToken, addressFetched, isLoggedIn, getCustomerAddressList]);

  return <>{children}</>;
}

CheckoutFormWrapper.propTypes = {
  children: node.isRequired,
};

export default CheckoutFormWrapper;
