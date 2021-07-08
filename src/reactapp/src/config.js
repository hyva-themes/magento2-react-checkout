import env from './utils/env';
import RootElement from './utils/rootElement';
import { getConfigFromLocalStorage } from './utils/localStorageConfig';

const hyvaCheckoutStorageKey = 'hyva-checkout-storage';

const magentoDataSources = {
  hyvaCheckoutCacheStorage: {
    storageKey: hyvaCheckoutStorageKey,
    data: {
      customerShippingAddress: {
        value: 'customer.shipping_address_id',
        timestamp: 'cart.data_id',
      },
      customerBillingAddress: {
        value: 'customer.billing_address_id',
        timestamp: 'cart.data_id',
      },
      billingSameAsShipping: {
        value: 'cart.is_billing_same_as_shipping',
        timestamp: 'cart.data_id',
      },
      newBillingAddress: {
        timestamp: 'cart.data_id',
        value: 'cart.new_billing_address',
      },
      newShippingAddress: {
        timestamp: 'cart.data_id',
        value: 'cart.new_shipping_address',
      },
    },
  },
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

const nodeEnv = process.env.NODE_ENV;
const activeSource = magentoDataSources.mageCacheStorage; // or `magentoDataSources.m2BrowserPersistence` for PWA;

export const config = {
  isDevelopmentMode: nodeEnv === 'development',
  isProductionMode: nodeEnv === 'production',
  storageSource: activeSource,
  hyvaStorageSource: magentoDataSources.hyvaCheckoutCacheStorage,
  cartId: getConfigFromLocalStorage(activeSource.cartId),
  signInToken: getConfigFromLocalStorage(activeSource.token),
  baseUrl: env.baseUrl || RootElement.getBaseUrl() || '',
  defaultPaymentMethod: 'checkmo',
  defaultCountry: 'US',
  currencySymbols: {
    EUR: '€',
    GBP: '£',
    USD: '$',
    INR: '₹',
  },
};

config.successPageRedirectUrl = `${config.baseUrl}/checkout/onepage/success`;

export const LOGIN_FORM = 'login';
export const CART_ITEMS_FORM = 'items';
export const SHIPPING_METHOD = 'shipping_method';
export const BILLING_ADDR_FORM = 'billing_address';
export const PAYMENT_METHOD_FORM = 'payment_method';
export const SHIPPING_ADDR_FORM = 'shipping_address';
export const CHECKOUT_AGREEMENTS_FORM = 'agreements';
