import React from 'react';

import CartItemsMemorized from './CartItemsMemorized';
import { useItemsMemorizer } from '../../../code/items/hooks';

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
  const cartItemsFormikData = useItemsMemorizer();
  return <CartItemsMemorized formikData={cartItemsFormikData} />;
}

export default CartItemsForm;
