import { get as _get } from 'lodash-es';

import { _isObjEmpty } from '../../../../utils';
import { useCartContext } from '../../../../hooks';
import { isCartAddressValid } from '../../../../utils/address';

export default function usePaymentMethodCartContext() {
  const { cart, setPaymentMethod } = useCartContext();
  const isVirtualCart = !!_get(cart, 'isVirtualCart');
  const shippingAddress = _get(cart, 'shipping_address');
  const methodList = _get(cart, 'available_payment_methods') || {};
  const selectedPaymentMethod = _get(cart, 'selected_payment_method');

  return {
    methodList,
    isVirtualCart,
    setPaymentMethod,
    selectedPaymentMethod,
    isPaymentAvailable: !_isObjEmpty(methodList),
    doCartContainShippingAddress: isCartAddressValid(shippingAddress),
  };
}
