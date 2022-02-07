import { useAppContext } from '../../../../hooks';

export default function useLoginAppContext() {
  const {
    customer,
    ajaxLogin,
    isLoggedIn,
    setMessage,
    pageLoader,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
  } = useAppContext();

  return {
    customer,
    ajaxLogin,
    isLoggedIn,
    setMessage,
    pageLoader,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
  };
}
