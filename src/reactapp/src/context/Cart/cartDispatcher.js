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
import {
  getCheckoutAgreementsAction,
  changeCheckoutAgreementAction,
} from './checkoutAgreements/actions';

const dispatchMapper = {
  placeOrder: placeOrderAction,
  mergeCarts: mergeCartsAction,
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
  getCheckoutAgreements: getCheckoutAgreementsAction,
  changeCheckoutAgreement: changeCheckoutAgreementAction,
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
