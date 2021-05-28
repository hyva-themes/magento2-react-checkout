import { useContext, useMemo } from 'react';
import _get from 'lodash.get';
import CartContext from '../../../context/Cart/CartContext';
import AppContext from '../../../context/App/AppContext';

export default function usePaypalExpressCartContext() {
  const [cartData] = useContext(CartContext);
  const [, appActions] = useContext(AppContext);

  return useMemo(() => {
    const cart = _get(cartData, 'cart');

    const cartBillingAddress = _get(cart, `billing_address`);
    const hasCartBillingAddress = !!cartBillingAddress?.firstname;

    const { selected_shipping_method: selectedShippingMethod = {} } = _get(
      cartData,
      'cart',
      {}
    );

    const selectedPaymentMethod = _get(cart, 'selected_payment_method');

    const cartId = _get(cart, 'id');
    const { setErrorMessage, setPageLoader } = appActions;

    return {
      hasCartBillingAddress,
      selectedShippingMethod,
      selectedPaymentMethod,
      setErrorMessage,
      setPageLoader,
      cartId,
    };
  }, [cartData, appActions]);
}
