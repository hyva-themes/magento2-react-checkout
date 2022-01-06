import useAppContext from '../../../hook/useAppContext';

export default function useCouponCodeAppContext() {
  const { setPageLoader, setSuccessMessage, setErrorMessage } = useAppContext();

  return { setPageLoader, setSuccessMessage, setErrorMessage };
}
