import { useContext } from 'react';
import AppContext from '../../../context/App/AppContext';

export default function useLoginAppContext() {
  const [appData, appActions] = useContext(AppContext);
  const { isLoggedIn, customer } = appData;
  const { setPageLoader, setSuccessMessage, setErrorMessage, ajaxLogin } =
    appActions;

  return {
    customer,
    isLoggedIn,
    setPageLoader,
    ajaxLogin,
    setSuccessMessage,
    setErrorMessage,
  };
}
