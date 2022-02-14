import _get from 'lodash.get';

import { useCartContext } from '../../../../hooks';

export default function useTotalsCartContext() {
  const { cart } = useCartContext();
  const shippingMethod = _get(cart, 'selected_shipping_method') || {};
  const prices = _get(cart, 'prices') || {};
  const { price: shippingMethodRate } = shippingMethod;
  const {
    discounts,
    grandTotal,
    subTotalIncl,
    subTotalExcl,
    appliedTaxes,
    hasDiscounts,
    hasAppliedTaxes,
    grandTotalAmount,
    subTotalInclAmount,
  } = prices;

  return {
    discounts,
    grandTotal,
    subTotalIncl,
    subTotalExcl,
    appliedTaxes,
    hasDiscounts,
    hasAppliedTaxes,
    shippingMethodRate,
    hasSubTotal: !!subTotalInclAmount,
    hasGrandTotal: !!grandTotalAmount,
    hasShippingRate: !!shippingMethod?.id,
  };
}
