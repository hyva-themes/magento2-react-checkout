import useAppContext from '../../../hook/useAppContext';

export default function useShippingAddressAppContext() {
  const {
    stateList,
    isLoggedIn,
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
