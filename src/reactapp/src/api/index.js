import fetchGuestCart from './cart/fetchGuestCart';
import setEmailOnGuestCart from './cart/setEmailOnGuestCart';
import setShippingAddress from './cart/setShippingAddress';
import { isError } from './cart/utility';
import fetchCountryList from './countries/fetchCountryList';

export const isResponseError = isError;

export const setEmailOnGuestCartRequest = setEmailOnGuestCart;

export const setShippingAddressRequest = setShippingAddress;

export const fetchGuestCartRequest = fetchGuestCart;

export const fetchCountryListRequest = fetchCountryList;
