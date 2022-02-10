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
    subTotal,
    grandTotal,
    discounts,
    hasDiscounts,
    subTotalAmount,
    grandTotalAmount,
  } = prices;

  return {
    subTotal,
    grandTotal,
    discounts,
    shippingMethodRate,
    hasDiscounts,
    hasSubTotal: !!subTotalAmount,
    hasGrandTotal: !!grandTotalAmount,
    hasShippingRate: !!shippingMethod?.id,
  };
}
