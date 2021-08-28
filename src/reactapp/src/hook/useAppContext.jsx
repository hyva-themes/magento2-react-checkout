import { useContext } from 'react';

import AppContext from '../context/App/AppContext';

export default function useAppContext() {
  const [appData, appActions] = useContext(AppContext);
  const { dispatch: appDispatch } = appData;

  return {
    ...appData,
    ...appActions,
    appDispatch,
  };
}
