import useAppContext from '../useAppContext';

export default function useShippingAddrAppContext() {
  const [
    { isLoggedIn, defaultShippingAddress, customerAddressList, stateList },
    { setPageLoader, setSuccessMessage, updateCustomerAddress },
  ] = useAppContext();

  return {
    isLoggedIn,
    stateList,
    defaultShippingAddress,
    customerAddressList,
    setPageLoader,
    setSuccessMessage,
    updateCustomerAddress,
  };
}
