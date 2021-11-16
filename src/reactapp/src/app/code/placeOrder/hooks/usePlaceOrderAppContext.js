import { useAppContext } from '../../../../hooks';

export default function usePlaceOrderAppContext() {
  const { setMessage, setPageLoader, setSuccessMessage, setErrorMessage } =
    useAppContext();

  return { setMessage, setPageLoader, setSuccessMessage, setErrorMessage };
}
