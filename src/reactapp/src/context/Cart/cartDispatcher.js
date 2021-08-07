import {
  setBillingAddressAction,
  setCustomerAddrAsBillingAddrAction,
} from './billingAddress/actions';
import { updateCartItemAction } from './cartItems/actions';
import { placeOrderAction, setOrderInfoAction } from './order/actions';
import {
  setPaymentMethodAction,
  setRestPaymentMethodAction,
} from './paymentMethod/actions';
import { setShippingMethodAction } from './shippingMethod/actions';
import { setEmailOnGuestCartAction } from './email/actions';
import {
  mergeCartsAction,
  setCartInfoAction,
  createEmptyCartAction,
  getGuestCartInfoAction,
  getCustomerCartIdAction,
  getCartInfoAfterMergeAction,
} from './cart/actions';
import {
  addCartShippingAddressAction,
  setSelectedShippingAddressAction,
  setCustomerAddrAsShippingAddrAction,
} from './shippingAddress/actions';

const dispatchMapper = {
  placeOrder: placeOrderAction,
  mergeCarts: mergeCartsAction,
  setCartInfo: setCartInfoAction,
  setOrderInfo: setOrderInfoAction,
  updateCartItem: updateCartItemAction,
  createEmptyCart: createEmptyCartAction,
  getGuestCartInfo: getGuestCartInfoAction,
  setPaymentMethod: setPaymentMethodAction,
  setShippingMethod: setShippingMethodAction,
  getCustomerCartId: getCustomerCartIdAction,
  getCustomerCartInfo: getGuestCartInfoAction,
  setEmailOnGuestCart: setEmailOnGuestCartAction,
  setCartBillingAddress: setBillingAddressAction,
  setRestPaymentMethod: setRestPaymentMethodAction,
  getCartInfoAfterMerge: getCartInfoAfterMergeAction,
  addCartShippingAddress: addCartShippingAddressAction,
  setCartSelectedShippingAddress: setSelectedShippingAddressAction,
  setCustomerAddressAsBillingAddress: setCustomerAddrAsBillingAddrAction,
  setCustomerAddressAsShippingAddress: setCustomerAddrAsShippingAddrAction,
};

function cartDispatchers(dispatch, appDispatch) {
  const dispatchers = { dispatch };

  Object.keys(dispatchMapper).forEach(dispatchName => {
    dispatchers[dispatchName] = dispatchMapper[dispatchName].bind(
      null,
      dispatch,
      appDispatch
    );
  });

  return dispatchers;
}

export default cartDispatchers;
