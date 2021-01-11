import { useContext, useMemo } from 'react';
import _get from 'lodash.get';
import CartContext from '../context/Cart/CartContext';
import { _keys } from '../utils';

export default function useCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  return useMemo(() => {
    const {
      addCartShippingAddress,
      setCartBillingAddress,
      getGuestCartInfo,
      setEmailOnGuestCart,
      setCartSelectedShippingAddress,
    } = cartActions;
    const cart = _get(cartData, 'cart');
    const cartEmail = _get(cartData, 'cart.email', '');
    const cartBillingAddress = _get(cartData, `cart.billing_address`);
    const cartShippingMethods = _get(cartData, 'cart.shipping_methods');
    const selectedShippingAddressId = _get(
      cartData,
      'cart.selected_shipping_address'
    );
    const shippingAddressList = _get(cartData, `cart.shipping_addresses`);
    const shippingAddressIds = _keys(shippingAddressList);
    const selectedShippingAddress = _get(
      shippingAddressList,
      selectedShippingAddressId
    );
    const selectedShippingMethods = _get(
      cartShippingMethods,
      selectedShippingAddressId,
      []
    );
    const cartItems = _get(cartData, 'cart.items');

    return {
      cart,
      cartEmail,
      cartBillingAddress,
      selectedShippingAddress,
      shippingAddressIds,
      shippingAddressList,
      selectedShippingMethods,
      cartItems,

      // actions
      addCartShippingAddress,
      setCartBillingAddress,
      getGuestCartInfo,
      setEmailOnGuestCart,
      setCartSelectedShippingAddress,
    };
  }, [cartData, cartActions]);
}
