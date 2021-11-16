import useAppContext from '../../../hook/useAppContext';

export default function useCheckoutFormAppContext() {
  const { pageLoader, setPageLoader, appDispatch, storeAggregatedAppStates } =
    useAppContext();

  return {
    pageLoader,
    appDispatch,
    setPageLoader,
    storeAggregatedAppStates,
  };
}
