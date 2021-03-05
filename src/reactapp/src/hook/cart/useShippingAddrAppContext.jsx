import useAppContext from '../useAppContext';

export default function useShippingAddrAppContext() {
  const [
    { isLoggedIn, defaultShippingAddress, customerAddressList },
    { setPageLoader },
  ] = useAppContext();

  return {
    isLoggedIn,
    defaultShippingAddress,
    customerAddressList,
    setPageLoader,
  };
}
