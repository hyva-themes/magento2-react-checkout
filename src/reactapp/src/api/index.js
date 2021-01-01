import fetchGuestCart from './cart/fetchGuestCart';
import setEmailOnGuestCart from './cart/setEmailOnGuestCart';
import { isError } from './cart/utility';
import fetchCountryList from './countries/fetchCountryList';

export const isResponseError = isError;

export const setEmailOnGuestCartRequest = setEmailOnGuestCart;

export const fetchGuestCartRequest = fetchGuestCart;

export const fetchCountryListRequest = fetchCountryList;
