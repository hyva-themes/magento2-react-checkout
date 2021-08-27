import useAppContext from '../../../hook/useAppContext';

export default function useShippingAddressAppContext() {
  const [
    {
      stateList,
      isLoggedIn,
      countryList,
      customerAddressList,
      defaultBillingAddress,
      defaultShippingAddress,
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
    updateCustomerAddress,
    defaultBillingAddress,
    defaultShippingAddress,
  };
}
