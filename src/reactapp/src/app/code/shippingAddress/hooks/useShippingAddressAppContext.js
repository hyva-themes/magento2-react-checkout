import { useAppContext } from '../../../../hooks';

export default function useShippingAddressAppContext() {
  const {
    stateList,
    isLoggedIn,
    setMessage,
    countryList,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
    customerAddressList,
    updateCustomerAddress,
    defaultBillingAddress,
    defaultShippingAddress,
  } = useAppContext();

  return {
    stateList,
    isLoggedIn,
    setMessage,
    countryList,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
    customerAddressList,
    updateCustomerAddress,
    defaultBillingAddress,
    defaultShippingAddress,
  };
}
