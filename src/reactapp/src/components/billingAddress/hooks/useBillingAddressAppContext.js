import useAppContext from '../../../hook/useAppContext';

export default function useBillingAddressAppContext() {
  const {
    stateList,
    isLoggedIn,
    countryList,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
    customerAddressList,
    defaultBillingAddress,
    updateCustomerAddress,
  } = useAppContext();

  return {
    stateList,
    isLoggedIn,
    countryList,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
    customerAddressList,
    defaultBillingAddress,
    updateCustomerAddress,
  };
}
