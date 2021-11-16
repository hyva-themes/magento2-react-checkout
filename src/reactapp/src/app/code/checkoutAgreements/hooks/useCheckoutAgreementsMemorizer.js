import { useMemo } from 'react';

import { useFormikMemorizer } from '../../../../hooks';
import { CHECKOUT_AGREEMENTS_FORM } from '../../../../config';

export default function useCheckoutAgreementsMemorizer() {
  const formikSectionData = useFormikMemorizer(CHECKOUT_AGREEMENTS_FORM);

  const agreementsFormikData = useMemo(
    () => ({
      ...formikSectionData,
      agreementsValues: formikSectionData.formSectionValues,
    }),
    [formikSectionData]
  );

  return agreementsFormikData;
}
