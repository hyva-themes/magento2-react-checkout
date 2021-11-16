import { useAppContext } from '../../../../hooks';

export default function useShippingMethodAppContext() {
  const { setMessage, setPageLoader, setSuccessMessage, setErrorMessage } =
    useAppContext();

  return { setMessage, setPageLoader, setSuccessMessage, setErrorMessage };
}
