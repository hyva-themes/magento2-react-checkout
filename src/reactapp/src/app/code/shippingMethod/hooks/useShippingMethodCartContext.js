import { _isObjEmpty } from '../../../../utils';
import { useCartContext } from '../../../../hooks';

export default function useShippingMethodCartContext() {
  const { cart, setShippingMethod } = useCartContext();
  const {
    shipping_methods: methodList,
    selected_shipping_method: selectedMethod = {},
  } = cart || {};

  return {
    methodList,
    selectedMethod,
    setShippingMethod,
    methodsAvailable: !_isObjEmpty(methodList),
  };
}
