import env from './utils/env';
import RootElement from './utils/rootElement';
import { getConfigFromLocalStorage } from './utils/localStorageConfig';

const hyvaCheckoutStorageKey = 'hyva-checkout-storage';

const magentoDataSources = {
  hyvaCheckoutCacheStorage: {
    storageKey: hyvaCheckoutStorageKey,
    data: {
      customerShippingAddress: {
        timestamp: 'cart.data_id',
        value: 'customer.shipping_address_id',
      },
      customerBillingAddress: {
        timestamp: 'cart.data_id',
        value: 'customer.billing_address_id',
      },
      billingSameAsShipping: {
        timestamp: 'cart.data_id',
        value: 'cart.is_billing_same_as_shipping',
      },
      mostRecentlyUsedAddressList: {
        timestamp: 'cart.data_id',
        value: 'cart.most_recently_used_address_list',
      },
    },
  },
  mageCacheStorage: {
    cartId: {
      value: 'cart.cartId',
      timestamp: 'cart.data_id',
      storageKey: 'mage-cache-storage',
    },
    token: {
      timestamp: 'customer.data_id',
      value: 'customer.signin_token',
      storageKey: 'mage-cache-storage',
    },
  },
  m2BrowserPersistence: {
    cartId: {
      ttl: 'ttl',
      value: 'value',
      timestamp: 'timeStored',
      storageKey: 'M2_VENIA_BROWSER_PERSISTENCE__cartId',
    },
    token: {
      ttl: 'ttl',
      value: 'value',
      timestamp: 'timeStored',
      storageKey: 'M2_VENIA_BROWSER_PERSISTENCE__signin_token',
    },
  },
};

const nodeEnv = import.meta.env.NODE_ENV;
const activeSource = magentoDataSources.mageCacheStorage; // or `magentoDataSources.m2BrowserPersistence` for PWA;

export const config = {
  currencySymbols: {
    EUR: '€',
    GBP: '£',
    USD: '$',
    INR: '₹',
  },
  storageSource: activeSource,
  defaultPaymentMethod: 'checkmo',
  defaultCountry: env.defaultCountry || 'US',
  isProductionMode: nodeEnv === 'production',
  isDevelopmentMode: nodeEnv === 'development',
  cartId: getConfigFromLocalStorage(activeSource.cartId),
  baseUrl: env.baseUrl || RootElement.getBaseUrl() || '',
  signInToken: getConfigFromLocalStorage(activeSource.token),
  hyvaStorageSource: magentoDataSources.hyvaCheckoutCacheStorage,
};

config.successPageRedirectUrl = `${config.baseUrl}/checkout/onepage/success`;

export const LOGIN_FORM = 'login';
export const CART_ITEMS_FORM = 'items';
export const SHIPPING_METHOD = 'shipping_method';
export const BILLING_ADDR_FORM = 'billing_address';
export const PAYMENT_METHOD_FORM = 'payment_method';
export const SHIPPING_ADDR_FORM = 'shipping_address';
export const CHECKOUT_AGREEMENTS_FORM = 'agreements';
