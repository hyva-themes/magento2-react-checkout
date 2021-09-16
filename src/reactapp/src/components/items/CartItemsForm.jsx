import React, { useMemo } from 'react';

import CartItemsMemorized from './CartItemsMemorized';
import { CART_ITEMS_FORM } from '../../config';
import useFormikMemorizer from '../../hook/useFormikMemorizer';

/**
 * Entry point Cart Items Form Section
 *
 * We are preparing any data related to formik state here and memorizing it.
 * After that, these info will be fed to all other child components.
 *
 * So child components DO NOT access formik states using `useFormikContext` hook
 * inside them unless it is totally unavoidable.
 *
 * Using useFormikContext hook render the component almost always. So use the
 * memorized data here inside the child components.
 */
function CartItemsForm() {
  const formikSectionData = useFormikMemorizer(CART_ITEMS_FORM);

  const cartItemsFormikData = useMemo(
    () => ({
      ...formikSectionData,
      cartItemsValue: formikSectionData.formSectionValues,
      cartItemsTouched: formikSectionData.formSectionTouched,
    }),
    [formikSectionData]
  );

  return <CartItemsMemorized formikData={cartItemsFormikData} />;
}

export default CartItemsForm;
