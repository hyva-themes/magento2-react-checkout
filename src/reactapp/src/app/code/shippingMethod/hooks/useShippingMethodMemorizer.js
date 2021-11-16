import { useMemo } from 'react';

import { SHIPPING_METHOD } from '../../../../config';
import { useFormikMemorizer } from '../../../../hooks';

export default function useShippingMethodMemorizer() {
  const formikSectionData = useFormikMemorizer(SHIPPING_METHOD);

  const shippingFormikData = useMemo(
    () => ({
      ...formikSectionData,
      selectedMethod: formikSectionData.formSectionValues || {},
    }),
    [formikSectionData]
  );

  return shippingFormikData;
}
