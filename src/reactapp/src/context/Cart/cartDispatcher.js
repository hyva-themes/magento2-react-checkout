import {
  setBillingAddressAction,
  setCustomerAddrAsBillingAddrAction,
} from './billingAddress/actions';
import { updateCartItemAction } from './cartItems/actions';
import { placeOrderAction } from './order/actions';
import {
  setPaymentMethodAction,
  setRestPaymentMethodAction,
} from './paymentMethod/actions';
import { setShippingMethodAction } from './shippingMethod/actions';
import { setEmailOnGuestCartAction } from './email/actions';
import {
  createEmptyCartAction,
  getCartInfoAfterMergeAction,
  getCustomerCartIdAction,
  getGuestCartInfoAction,
  mergeCartsAction,
  setCustomerDefaultAddressToCartAction,
} from './cart/actions';
import {
  addCartShippingAddressAction,
  setSelectedShippingAddressAction,
  setCustomerAddrAsShippingAddrAction,
} from './shippingAddress/actions';

const dispatchMapper = {
  setEmailOnGuestCart: setEmailOnGuestCartAction,
  getGuestCartInfo: getGuestCartInfoAction,
  getCustomerCartInfo: getGuestCartInfoAction, // guest cart with auth = customer cart
  addCartShippingAddress: addCartShippingAddressAction,
  setCartSelectedShippingAddress: setSelectedShippingAddressAction,
  setCartBillingAddress: setBillingAddressAction,
  setShippingMethod: setShippingMethodAction,
  setPaymentMethod: setPaymentMethodAction,
  placeOrder: placeOrderAction,
  updateCartItem: updateCartItemAction,
  getCartInfoAfterMerge: getCartInfoAfterMergeAction,
  setCustomerDefaultAddressToCart: setCustomerDefaultAddressToCartAction,
  setCustomerAddressAsBillingAddress: setCustomerAddrAsBillingAddrAction,
  setCustomerAddressAsShippingAddress: setCustomerAddrAsShippingAddrAction,
  getCustomerCartId: getCustomerCartIdAction,
  createEmptyCart: createEmptyCartAction,
  mergeCarts: mergeCartsAction,
  setRestPaymentMethod: setRestPaymentMethodAction,
};

function cartDispatchers(dispatch) {
  const dispatchers = {};

  Object.keys(dispatchMapper).forEach(dispatchName => {
    dispatchers[dispatchName] = dispatchMapper[dispatchName].bind(
      null,
      dispatch
    );
  });

  return dispatchers;
}

export default cartDispatchers;
