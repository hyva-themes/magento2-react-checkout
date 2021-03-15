import useAppContext from '../useAppContext';

export default function useBillingAddrAppContext() {
  const [{ isLoggedIn }] = useAppContext();

  return {
    isLoggedIn,
  };
}
