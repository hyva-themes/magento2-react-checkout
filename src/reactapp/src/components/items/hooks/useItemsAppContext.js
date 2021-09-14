import useAppContext from '../../../hook/useAppContext';

export default function useItemsAppContext() {
  const { setMessage, setPageLoader, setSuccessMessage, setErrorMessage } =
    useAppContext();

  return { setMessage, setPageLoader, setSuccessMessage, setErrorMessage };
}
