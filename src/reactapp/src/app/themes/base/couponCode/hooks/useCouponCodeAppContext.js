import { useAppContext } from '../../../../../hooks';

export default function useCouponCodeAppContext() {
  const { setPageLoader, setSuccessMessage, setErrorMessage } = useAppContext();

  return { setPageLoader, setSuccessMessage, setErrorMessage };
}
