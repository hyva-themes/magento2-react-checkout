import _get from 'lodash.get';

import { _isObjEmpty } from '../../../utils';
import useCartContext from '../../../hook/useCartContext';
import { isCartAddressValid } from '../../../utils/address';

export default function usePaymentMethodCartContext() {
  const { cart, setPaymentMethod } = useCartContext();
  const shippingAddress = _get(cart, 'shipping_address');
  const methodList = _get(cart, 'available_payment_methods') || {};
  const selectedPaymentMethod = _get(cart, 'selected_payment_method');
  const isVirtualCart = !!_get(cart, 'isVirtualCart');

  return {
    methodList,
    isVirtualCart,
    setPaymentMethod,
    selectedPaymentMethod,
    isPaymentAvailable: !_isObjEmpty(methodList),
    doCartContainShippingAddress: isCartAddressValid(shippingAddress),
  };
}
