import { useMemo } from 'react';
import { get as _get } from 'lodash-es';
import { useFormikContext } from 'formik';

import {
  PAYMENT_METHOD_FORM,
  CHECKOUT_AGREEMENTS_FORM,
} from '../../../../config';
import { useFormikMemorizer } from '../../../../hooks';

export default function usePaymentMethodMemorizer() {
  const { values } = useFormikContext();
  const formikSectionData = useFormikMemorizer(PAYMENT_METHOD_FORM);
  const agreementsValues = _get(values, CHECKOUT_AGREEMENTS_FORM);

  const paymentFormikData = useMemo(
    () => ({
      ...formikSectionData,
      agreementsValues,
      paymentValues: formikSectionData.formSectionValues,
    }),
    [formikSectionData, agreementsValues]
  );

  return paymentFormikData;
}
