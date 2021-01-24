import fetchGuestCart from './cart/fetchGuestCart';
import placeOrder from './cart/placeOrder';
import setBillingAddress from './cart/setBillingAddress';
import setEmailOnGuestCart from './cart/setEmailOnGuestCart';
import setPaymentMethod from './cart/setPaymentMethod';
import setShippingAddress from './cart/setShippingAddress';
import setShippingMethod from './cart/setShippingMethod';
import { isError } from './cart/utility';
import fetchCountryList from './countries/fetchCountryList';
import fetchCountryStateList from './countries/fetchCountryStateList';

export const isResponseError = isError;

export const setEmailOnGuestCartRequest = setEmailOnGuestCart;

export const setShippingAddressRequest = setShippingAddress;

export const setBillingAddressRequest = setBillingAddress;

export const fetchCountryStateListRequest = fetchCountryStateList;

export const fetchGuestCartRequest = fetchGuestCart;

export const fetchCountryListRequest = fetchCountryList;

export const setShippingMethodRequest = setShippingMethod;

export const setPaymentMethodRequest = setPaymentMethod;

export const placeOrderRequest = placeOrder;
