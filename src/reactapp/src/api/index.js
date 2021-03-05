import createEmptyCart from './cart/createEmptyCart';
import fetchGuestCart from './cart/fetchGuestCart';
import mergeCarts from './cart/mergeCarts';
import placeOrder from './cart/placeOrder';
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
import fetchCustomerAddressList from './customer/fetchCustomerAddresses';
import fetchCustomerCart from './customer/fetchCustomerCart';
import fetchCustomerInfo from './customer/fetchCustomerInfo';
import generateToken from './customer/generateToken';

export const isResponseError = isError;

export const generateCustomerToken = generateToken;

export const fetchCustomerInfoRequest = fetchCustomerInfo;

export const fetchCustomerAddressListRequest = fetchCustomerAddressList;

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
