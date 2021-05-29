import { useContext } from 'react';
import AppContext from '../../../context/App/AppContext';

export default function usePaypalExpressCartContext() {
  const [, appActions] = useContext(AppContext);
  const { setErrorMessage, setPageLoader } = appActions;

  return {
    setErrorMessage,
    setPageLoader,
  };
}
