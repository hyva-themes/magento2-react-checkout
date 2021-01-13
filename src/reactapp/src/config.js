import { getConfigFromLocalStorage } from './utils/localStorageConfig';

const magentoDataSources = {
    mageCacheStorage: {
        cartId: {
            storageKey: 'mage-cache-storage',
            value: 'cart.cartId',
            timestamp: 'cart.data_id',
        },
        storeViewCode: {
            storageKey: 'mage-cache-storage',
            value: 'cart.storeViewCode',
            timestamp: 'cart.store_view_code',
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
         storeViewCode: {
            storageKey: 'apollo-cache-persist',
            value: 'StoreConfig.code',
        },
        token: {
            storageKey: 'M2_VENIA_BROWSER_PERSISTENCE__signin_token',
            value: 'value',
            ttl: 'ttl',
            timestamp: 'timeStored',
        },
    },
};

const activeSource = magentoDataSources.mageCacheStorage; //or `magentoDataSources.m2BrowserPersistence` for PWA;

export const config = {
    cartId: getConfigFromLocalStorage(activeSource.cartId),
    storeViewCode: getConfigFromLocalStorage(activeSource.storeViewCode) || 'default',
    signInToken: getConfigFromLocalStorage(activeSource.token),
    baseUrl: window.BASE_URL || 'https://magento2.test/',
    defaultPaymentMethod: 'checkmo',
    defaultCountry: 'US'
};
