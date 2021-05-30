import { useContext } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';

export default function usePaypalExpressCartContext() {
  const [cartData, cartActions] = useContext(CartContext);
  const cart = _get(cartData, 'cart');
  const cartId = _get(cart, 'id');
  const cartBillingAddress = _get(cart, `billing_address`, {});
  const selectedShippingMethod = _get(cart, 'selected_shipping_method', {});
  const selectedPaymentMethod = _get(cart, 'selected_payment_method');
  const { firstname, lastname, zipcode } = cartBillingAddress;
  const hasCartBillingAddress = firstname && lastname && zipcode;
  const {
    placeOrder,
    setPaypalExpressPaymentMethod,
    createPaypalExpressCustomerToken,
  } = cartActions;

  return {
    cartId,
    hasCartBillingAddress,
    selectedShippingMethod,
    selectedPaymentMethod,
    placeOrder,
    setPaypalExpressPaymentMethod,
    createPaypalExpressCustomerToken,
  };
}
