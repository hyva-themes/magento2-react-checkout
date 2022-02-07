import _get from 'lodash.get';

import { useCartContext } from '../../../../hooks';

export default function useTotalsCartContext() {
  const { cart } = useCartContext();
  const prices = _get(cart, 'prices') || {};
  const shippingMethod = _get(cart, 'selected_shipping_method') || {};
  const { price: shippingMethodRate } = shippingMethod;
  const {
    subTotal,
    discounts,
    grandTotal,
    hasDiscounts,
    subTotalAmount,
    grandTotalAmount,
  } = prices;

  return {
    subTotal,
    discounts,
    grandTotal,
    hasDiscounts,
    shippingMethodRate,
    hasSubTotal: !!subTotalAmount,
    hasGrandTotal: !!grandTotalAmount,
    hasShippingRate: !!shippingMethodRate,
  };
}
