import { useContext } from 'react';
import _get from 'lodash.get';
import CartContext from '../../../context/Cart/CartContext';

export default function usePaypalExpressCartContext() {
  const [cartData] = useContext(CartContext);

  const cart = _get(cartData, 'cart');

  const cartBillingAddress = _get(cart, `billing_address`);
  const hasCartBillingAddress =
    !!cartBillingAddress?.firstname &&
    !!cartBillingAddress?.lastname &&
    !!cartBillingAddress?.zipcode;

  const { selected_shipping_method: selectedShippingMethod = {} } = _get(
    cartData,
    'cart',
    {}
  );

  const selectedPaymentMethod = _get(cart, 'selected_payment_method');

  const cartId = _get(cart, 'id');

  return {
    hasCartBillingAddress,
    selectedShippingMethod,
    selectedPaymentMethod,
    cartId,
  };
}
