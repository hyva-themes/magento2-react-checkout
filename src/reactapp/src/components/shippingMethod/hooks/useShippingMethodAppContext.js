import { useContext } from 'react';

import AppContext from '../../../context/App/AppContext';

export default function useShippingMethodAppContext() {
  const [, appActions] = useContext(AppContext);
  const { setPageLoader, setSuccessMessage, setErrorMessage } = appActions;

  return { setPageLoader, setSuccessMessage, setErrorMessage };
}
