import useAppContext from '../../../hook/useAppContext';

export default function useBillingAddressAppContext() {
  const [
    {
      stateList,
      isLoggedIn,
      countryList,
      customerAddressList,
      defaultBillingAddress,
    },
    {
      setPageLoader,
      setErrorMessage,
      setSuccessMessage,
      updateCustomerAddress,
    },
  ] = useAppContext();

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
