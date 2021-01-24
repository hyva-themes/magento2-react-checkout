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
      setShippingMethod,
    } = cartActions;
    const cart = _get(cartData, 'cart');
    const cartEmail = _get(cart, 'email', '');

    const cartBillingAddress = _get(cart, `billing_address`);
    const cartShippingMethods = _get(cart, 'shipping_methods');
    const selectedShippingAddressId = _get(cart, 'selected_shipping_address');
    const shippingAddressList = _get(cart, `shipping_addresses`);
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

    const cartItems = _get(cart, 'items');

    const shippingMethod = _get(cart, 'selected_shipping_method');
    const shippingMethodRate = _get(shippingMethod, 'price');

    const subTotal = _get(cart, 'prices.subTotal');
    const grandTotal = _get(cart, 'prices.grandTotal');

    const paymentMethodList = _get(cart, 'available_payment_methods');

    return {
      cart,
      cartEmail,
      cartBillingAddress,
      selectedShippingAddress,
      shippingAddressIds,
      shippingAddressList,
      selectedShippingMethods,
      cartItems,
      shippingMethod,
      shippingMethodRate,
      subTotal,
      grandTotal,
      paymentMethodList,

      // actions
      addCartShippingAddress,
      setCartBillingAddress,
      getGuestCartInfo,
      setEmailOnGuestCart,
      setCartSelectedShippingAddress,
      setShippingMethod,
    };
  }, [cartData, cartActions]);
}
