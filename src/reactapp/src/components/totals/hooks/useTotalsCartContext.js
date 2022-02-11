import { useContext } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';

export default function useTotalsCartContext() {
  const [cartData] = useContext(CartContext);
  const cart = _get(cartData, 'cart');
  const shippingMethod = _get(cart, 'selected_shipping_method') || {};
  const prices = _get(cart, 'prices') || {};
  const { price: shippingMethodRate } = shippingMethod;
  const {
    subTotalIncl,
    subTotalExcl,
    grandTotal,
    appliedTaxes,
    hasAppliedTaxes,
    discounts,
    hasDiscounts,
    subTotalInclAmount,
    grandTotalAmount,
  } = prices;

  return {
    subTotalIncl,
    subTotalExcl,
    grandTotal,
    discounts,
    appliedTaxes,
    shippingMethodRate,
    hasDiscounts,
    hasAppliedTaxes,
    hasSubTotal: !!subTotalInclAmount,
    hasGrandTotal: !!grandTotalAmount,
    hasShippingRate: !!shippingMethod?.id,
  };
}
