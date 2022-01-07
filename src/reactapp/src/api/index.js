import mergeCarts from './cart/mergeCarts';
import placeOrder from './cart/placeOrder';
import ajaxLogin from './customer/ajaxLogin';
import aggregatedQuery from './aggregatedQuery';
import fetchGuestCart from './cart/fetchGuestCart';
import createEmptyCart from './cart/createEmptyCart';
import generateToken from './customer/generateToken';
import updateCartItems from './cart/updateCartItems';
import setPaymentMethod from './cart/setPaymentMethod';
import setBillingAddress from './cart/setBillingAddress';
import setShippingMethod from './cart/setShippingMethod';
import setShippingAddress from './cart/setShippingAddress';
import fetchCountryList from './countries/fetchCountryList';
import fetchCustomerCart from './customer/fetchCustomerCart';
import fetchCustomerInfo from './customer/fetchCustomerInfo';
import setEmailOnGuestCart from './cart/setEmailOnGuestCart';
import restSetMyPaymentMethod from './cart/restSetMyPaymentMethod';
import updateCustomerAddress from './customer/updateCustomerAddress';
import fetchCountryStateList from './countries/fetchCountryStateList';
import getCheckoutAgreements from './storeConfig/getCheckoutAgreements';
import fetchCustomerAddressList from './customer/fetchCustomerAddresses';
import restSetGuestPaymentMethod from './cart/restSetGuestPaymentMethod';
import { applyCouponCodeToCart, removeCouponCodeFromCart } from './cart/coupon';
import setCustomerAddressOnCartBilling from './cart/setCustomerAddressOnBilling';
import setCustomerAddrOnShippingAddr from './cart/setCustomerAddrOnShippingAddr';


export const generateCustomerToken = generateToken;

export const ajaxLoginRequest = ajaxLogin;

export const fetchCustomerInfoRequest = fetchCustomerInfo;

export const fetchCustomerAddressListRequest = fetchCustomerAddressList;

export const updateCustomerAddressRequest = updateCustomerAddress;

export const setEmailOnGuestCartRequest = setEmailOnGuestCart;

export const setShippingAddressRequest = setShippingAddress;

export const setBillingAddressRequest = setBillingAddress;

export const setCustomerAddrAsCartBillingAddrRequest =
  setCustomerAddressOnCartBilling;

export const setCustomerAddrAsCartShippingAddrRequest =
  setCustomerAddrOnShippingAddr;

export const fetchCountryStateListRequest = fetchCountryStateList;

export const fetchGuestCartRequest = fetchGuestCart;

export const fetchCustomerCartRequest = fetchCustomerCart;

export const fetchCountryListRequest = fetchCountryList;

export const setShippingMethodRequest = setShippingMethod;

export const setPaymentMethodRequest = setPaymentMethod;

export const updateCartItemsRequest = updateCartItems;

export const createEmptyCartRequest = createEmptyCart;

export const mergeCartsRequest = mergeCarts;

export const placeOrderRequest = placeOrder;

export const restSetGuestPaymentMethodRequest = restSetGuestPaymentMethod;

export const restSetMyPaymentMethodRequest = restSetMyPaymentMethod;

export const getCheckoutAgreementsRequest = getCheckoutAgreements;

export const aggregatedQueryRequest = aggregatedQuery;

export const applyCouponCodeToCartRequest = applyCouponCodeToCart;

export const removeCouponCodeFromCartRequest = removeCouponCodeFromCart;
