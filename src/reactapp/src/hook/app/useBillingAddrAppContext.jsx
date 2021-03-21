import useAppContext from '../useAppContext';

export default function useBillingAddrAppContext() {
  const [
    { isLoggedIn, customerAddressList },
    { setPageLoader },
  ] = useAppContext();

  return {
    isLoggedIn,
    customerAddressList,
    setPageLoader,
  };
}
