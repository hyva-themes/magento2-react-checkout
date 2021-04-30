import { useContext } from 'react';
import AppContext from '../../../context/App/AppContext';

export default function useLoginAppContext() {
  const [appData, appActions] = useContext(AppContext);
  const { isLoggedIn, customer } = appData;
  const {
    signInCustomer,
    setPageLoader,
    getCustomerAddressList,
    setSuccessMessage,
  } = appActions;

  return {
    customer,
    isLoggedIn,
    signInCustomer,
    setPageLoader,
    getCustomerAddressList,
    setSuccessMessage,
  };
}
