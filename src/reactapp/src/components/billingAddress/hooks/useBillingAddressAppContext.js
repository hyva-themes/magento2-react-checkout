import useAppContext from '../../../hook/useAppContext';

export default function useBillingAddressAppContext() {
  const [
    {
      isLoggedIn,
      defaultBillingAddress,
      customerAddressList,
      stateList,
      countryList,
    },
    {
      setPageLoader,
      setSuccessMessage,
      updateCustomerAddress,
      setErrorMessage,
    },
  ] = useAppContext();

  return {
    isLoggedIn,
    stateList,
    countryList,
    defaultBillingAddress,
    customerAddressList,
    setPageLoader,
    setSuccessMessage,
    setErrorMessage,
    updateCustomerAddress,
  };
}
