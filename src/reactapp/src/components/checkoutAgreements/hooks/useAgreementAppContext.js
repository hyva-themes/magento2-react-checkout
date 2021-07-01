import { useContext } from 'react';

import AppContext from '../../../context/App/AppContext';

export default function useAgreementAppContext() {
  const [appData, appActions] = useContext(AppContext);
  const { checkoutAgreements } = appData;
  const { getCheckoutAgreements, changeCheckoutAgreement } = appActions;

  return { checkoutAgreements, getCheckoutAgreements, changeCheckoutAgreement };
}
