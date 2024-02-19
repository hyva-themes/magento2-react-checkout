import useAppContext from '../../../hook/useAppContext';

export default function useLoginAppContext() {
  const {
    customer,
    ajaxLogin,
    isLoggedIn,
    emailCheck,
    setMessage,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
  } = useAppContext();

  return {
    customer,
    ajaxLogin,
    isLoggedIn,
    emailCheck,
    setMessage,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
  };
}
