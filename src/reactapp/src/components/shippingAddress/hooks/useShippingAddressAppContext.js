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
    defaultShippingAddress,
  } = useAppContext();

  return {
    isLoggedIn,
    stateList,
    countryList,
    defaultShippingAddress,
    customerAddressList,
    setPageLoader,
    setSuccessMessage,
    setErrorMessage,
    updateCustomerAddress,
  };
}
