import createEmptyCart from './cart/createEmptyCart';
import fetchGuestCart from './cart/fetchGuestCart';
import mergeCarts from './cart/mergeCarts';
import placeOrder from './cart/placeOrder';
import restSetGuestPaymentMethod from './cart/restSetGuestPaymentMethod';
import restSetMyPaymentMethod from './cart/restSetMyPaymentMethod';
import setBillingAddress from './cart/setBillingAddress';
import setCustomerAddressOnCartBilling from './cart/setCustomerAddressOnBilling';
import setCustomerAddrOnShippingAddr from './cart/setCustomerAddrOnShippingAddr';
import setEmailOnGuestCart from './cart/setEmailOnGuestCart';
import setPaymentMethod from './cart/setPaymentMethod';
import setShippingAddress from './cart/setShippingAddress';
import setShippingMethod from './cart/setShippingMethod';
import updateCartItems from './cart/updateCartItems';
import { isError } from './cart/utility';
import fetchCountryList from './countries/fetchCountryList';
import fetchCountryStateList from './countries/fetchCountryStateList';
import ajaxLogin from './customer/ajaxLogin';
import fetchCustomerAddressList from './customer/fetchCustomerAddresses';
import fetchCustomerCart from './customer/fetchCustomerCart';
import fetchCustomerInfo from './customer/fetchCustomerInfo';
import generateToken from './customer/generateToken';
import updateCustomerAddress from './customer/updateCustomerAddress';
import setPaymentMethodPaypalExpress from "./cart/paypalExpress/setPaymentMethod";
import createCustomerToken from "./cart/paypalExpress/createCustomerToken";

export const isResponseError = isError;

export const generateCustomerToken = generateToken;

export const ajaxLoginRequest = ajaxLogin;

export const fetchCustomerInfoRequest = fetchCustomerInfo;

export const fetchCustomerAddressListRequest = fetchCustomerAddressList;

export const updateCustomerAddressRequest = updateCustomerAddress;

export const setEmailOnGuestCartRequest = setEmailOnGuestCart;

export const setShippingAddressRequest = setShippingAddress;

export const setBillingAddressRequest = setBillingAddress;

export const setCustomerAddrAsCartBillingAddrRequest = setCustomerAddressOnCartBilling;

export const setCustomerAddrAsCartShippingAddrRequest = setCustomerAddrOnShippingAddr;

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

export const setPaymentMethodPaypalExpressRequest = setPaymentMethodPaypalExpress;

export const createCustomerTokenRequest = createCustomerToken;