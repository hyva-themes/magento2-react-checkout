import React, { useMemo } from 'react';

import useFormikMemorizer from '../../hook/useFormikMemorizer';
import { CHECKOUT_AGREEMENTS_FORM } from '../../config';
import CheckoutAgreementsMemorized from './CheckoutAgreementsMemorized';

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
