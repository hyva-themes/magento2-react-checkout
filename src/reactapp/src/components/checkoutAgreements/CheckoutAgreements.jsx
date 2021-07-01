import React, { useMemo } from 'react';

import CheckoutAgreementsMemorized from './CheckoutAgreementsMemorized';
import { CHECKOUT_AGREEMENTS_FORM } from '../../config';
import useFormikMemorizer from '../../hook/useFormikMemorizer';

function CheckoutAgreements() {
  const formikSectionData = useFormikMemorizer(CHECKOUT_AGREEMENTS_FORM);

  const agreementsFormikData = useMemo(
    () => ({
      ...formikSectionData,
      agreementsValues: formikSectionData.formSectionValues,
    }),
    [formikSectionData]
  );

  return <CheckoutAgreementsMemorized formikData={agreementsFormikData} />;
}

export default CheckoutAgreements;
