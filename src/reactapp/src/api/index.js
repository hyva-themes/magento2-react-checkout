import setEmailOnGuestCart from './cart/email/setEmailOnGuestCart';
import { isError } from './cart/utility';
import fetchCountryList from './countries/fetchCountryList';

export const isResponseError = isError;

export const setEmailOnGuestCartRequest = setEmailOnGuestCart;

export const fetchCountryListRequest = fetchCountryList;
