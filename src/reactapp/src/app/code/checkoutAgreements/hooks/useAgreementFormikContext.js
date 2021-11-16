import { useContext } from 'react';

import { CheckoutAgreementsFormikContext } from '../context';

export default function useAgreementFormikContext() {
  return useContext(CheckoutAgreementsFormikContext);
}
