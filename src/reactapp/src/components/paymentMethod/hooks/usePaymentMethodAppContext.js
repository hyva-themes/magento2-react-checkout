import useAppContext from '../../../hook/useAppContext';

export default function usePaymentMethodAppContext() {
  const { setMessage, setPageLoader, setSuccessMessage, setErrorMessage } =
    useAppContext();

  return { setMessage, setPageLoader, setSuccessMessage, setErrorMessage };
}
