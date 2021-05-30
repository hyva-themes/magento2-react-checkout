import { useContext } from 'react';

import AppContext from '../../../context/App/AppContext';

export default function usePaypalExpressCartContext() {
  const [, { setErrorMessage, setPageLoader }] = useContext(AppContext);

  return {
    setErrorMessage,
    setPageLoader,
  };
}
