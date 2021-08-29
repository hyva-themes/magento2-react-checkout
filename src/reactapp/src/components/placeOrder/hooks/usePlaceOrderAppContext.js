import useAppContext from '../../../hook/useAppContext';

export default function usePlaceOrderAppContext() {
  const { setMessage, setPageLoader, setSuccessMessage, setErrorMessage } =
    useAppContext();

  return { setMessage, setPageLoader, setSuccessMessage, setErrorMessage };
}
