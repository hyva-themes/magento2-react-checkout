import { getConfigFromLocalStorage } from './utils/localStorageConfig';

const magentoDataSources = {
  mageCacheStorage: {
    cartId: {
      storageKey: 'mage-cache-storage',
      value: 'cart.cartId',
      timestamp: 'cart.data_id',
    },
    token: {
      storageKey: 'mage-cache-storage',
      value: 'customer.signin_token',
      timestamp: 'customer.data_id',
    },
  },
  m2BrowserPersistence: {
    cartId: {
      storageKey: 'M2_VENIA_BROWSER_PERSISTENCE__cartId',
      value: 'value',
      ttl: 'ttl',
      timestamp: 'timeStored',
    },
    token: {
      storageKey: 'M2_VENIA_BROWSER_PERSISTENCE__signin_token',
      value: 'value',
      ttl: 'ttl',
      timestamp: 'timeStored',
    },
  },
};

const activeSource = magentoDataSources.mageCacheStorage; // or `magentoDataSources.m2BrowserPersistence` for PWA;

export const config = {
  cartId: getConfigFromLocalStorage(activeSource.cartId),
  signInToken: getConfigFromLocalStorage(activeSource.token),
  baseUrl: process.env.REACT_APP_BASE_URL || '',
  defaultPaymentMethod: 'checkmo',
  defaultCountry: 'US',
  currencySymbols: {
    EUR: '€',
    GBP: '£',
    USD: '$',
    INR: '₹',
  },
};

export const GUEST_EMAIL_FORM = 'email';
export const BILLING_ADDR_FORM = 'billing_address';
export const SHIPPING_ADDR_FORM = 'shipping_address';
export const CART_ITEMS_FORM = 'items';
export const SHIPPING_METHOD = 'shipping_method';
