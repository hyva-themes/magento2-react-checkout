import useAppContext from '../../../hook/useAppContext';

export default function useShippingAddressAppContext() {
  const [
    {
      isLoggedIn,
      defaultShippingAddress,
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
    defaultShippingAddress,
    customerAddressList,
    setPageLoader,
    setSuccessMessage,
    setErrorMessage,
    updateCustomerAddress,
  };
}
