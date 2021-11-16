import { useAppContext } from '../../../../hooks';

export default function useBillingAddressAppContext() {
  const {
    stateList,
    isLoggedIn,
    setMessage,
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
    setMessage,
    countryList,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
    customerAddressList,
    defaultBillingAddress,
    updateCustomerAddress,
  };
}
