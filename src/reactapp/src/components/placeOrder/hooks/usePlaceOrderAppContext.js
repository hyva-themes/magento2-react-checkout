import { useContext } from 'react';

import AppContext from '../../../context/App/AppContext';

export default function usePlaceOrderAppContext() {
  const [, { setPageLoader, setSuccessMessage, setErrorMessage }] = useContext(
    AppContext
  );

  return { setPageLoader, setSuccessMessage, setErrorMessage };
}
