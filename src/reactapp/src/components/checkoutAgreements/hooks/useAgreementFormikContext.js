import { useContext } from 'react';
import CheckoutAgreementsFormikContext from '../context/CheckoutAgreementsFormikContext';

export default function useAgreementFormikContext() {
  return useContext(CheckoutAgreementsFormikContext);
}
