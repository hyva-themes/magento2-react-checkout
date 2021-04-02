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
    { setPageLoader, setSuccessMessage, updateCustomerAddress },
  ] = useAppContext();

  return {
    isLoggedIn: true,
    stateList,
    countryList,
    defaultShippingAddress,
    customerAddressList,
    setPageLoader,
    setSuccessMessage,
    updateCustomerAddress,
  };
}
