import React from 'react';

import CheckoutAgreementsMemorized from './CheckoutAgreementsMemorized';
import { useCheckoutAgreementsMemorizer } from '../../../code/checkoutAgreements/hooks';

function CheckoutAgreements() {
  const agreementsFormikData = useCheckoutAgreementsMemorizer();
  return <CheckoutAgreementsMemorized formikData={agreementsFormikData} />;
}

export default CheckoutAgreements;
