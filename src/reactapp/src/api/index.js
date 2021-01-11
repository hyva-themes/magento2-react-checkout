import fetchGuestCart from './cart/fetchGuestCart';
import setBillingAddress from './cart/setBillingAddress';
import setEmailOnGuestCart from './cart/setEmailOnGuestCart';
import setShippingAddress from './cart/setShippingAddress';
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
