import { useContext } from 'react';

import CheckoutAgreementsModalContext from '../context/CheckoutAgreementsModalContext';

export default function useAgreementModalContext() {
  return useContext(CheckoutAgreementsModalContext);
}
