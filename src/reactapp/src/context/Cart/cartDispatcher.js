import {
  setBillingAddressAction,
  setCustomerAddrAsBillingAddrAction,
} from './billingAddress/actions';
import { updateCartItemAction } from './cartItems/actions';
import { placeOrderAction } from './order/actions';
import { setPaymentMethodAction } from './paymentMethod/actions';
import { setShippingMethodAction } from './shippingMethod/actions';
import { setEmailOnGuestCartAction } from './email/actions';
import {
  getCartInfoAfterMergeAction,
  getGuestCartInfoAction,
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
