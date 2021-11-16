import _get from 'lodash.get';

import { _isObjEmpty } from '../../../../utils';
import { useCartContext } from '../../../../hooks';

export default function usePaymentMethodCartContext() {
  const { cart, setPaymentMethod } = useCartContext();
  const methodList = _get(cart, 'available_payment_methods', {});
  const selectedPaymentMethod = _get(cart, 'selected_payment_method');

  return {
    methodList,
    setPaymentMethod,
    selectedPaymentMethod,
    isPaymentAvailable: !_isObjEmpty(methodList),
  };
}
