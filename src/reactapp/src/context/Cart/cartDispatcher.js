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
  setCartInfoAction,
  mergeCartsAction,
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
  setOrderInfo: setOrderInfoAction,
  setCartInfo: setCartInfoAction,
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

function cartDispatchers(dispatch) {
  const dispatchers = {};

  Object.keys(dispatchMapper).forEach((dispatchName) => {
    dispatchers[dispatchName] = dispatchMapper[dispatchName].bind(
      null,
      dispatch
    );
  });

  return dispatchers;
}

export default cartDispatchers;
