import { useMemo } from 'react';

import { CART_ITEMS_FORM } from '../../../../config';
import { useFormikMemorizer } from '../../../../hooks';

export default function useItemsMemorizer() {
  const formikSectionData = useFormikMemorizer(CART_ITEMS_FORM);

  const cartItemsFormikData = useMemo(
    () => ({
      ...formikSectionData,
      cartItemsValue: formikSectionData.formSectionValues,
      cartItemsTouched: formikSectionData.formSectionTouched,
    }),
    [formikSectionData]
  );

  return cartItemsFormikData;
}
