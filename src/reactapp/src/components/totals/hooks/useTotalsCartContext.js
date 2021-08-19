import { useContext } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';

export default function useTotalsCartContext() {
  const [cartData] = useContext(CartContext);
  const cart = _get(cartData, 'cart');
  const shippingMethod = _get(cart, 'selected_shipping_method', {}) || {};
  const prices = _get(cart, 'prices', {}) || {};
  const { price: shippingMethodRate, amount: shippingAmount } = shippingMethod;
  const {
    subTotalIncTax,
    subTotalExTax,
    grandTotal,
    discounts,
    hasDiscounts,
    subTotalExTaxAmount,
    subTotalIncTaxAmount,
    grandTotalAmount,
    hasTaxes,
    taxes,
  } = prices;

  return {
    subTotalIncTax,
    subTotalExTax,
    grandTotal,
    discounts,
    shippingMethodRate,
    hasDiscounts,
    taxes,
    hasTaxes,
    hasSubTotal: !!(subTotalExTaxAmount||subTotalIncTaxAmount),
    hasGrandTotal: !!grandTotalAmount,
    hasShippingRate: !!shippingAmount,
  };
}
