import _get from 'lodash.get';
import _set from 'lodash.set';

import { config } from '../config';

const LocalStorage = {
  getMagentoLocalStorage() {
    const tokenSource = _get(config, 'storageSource.token', {});

    return (
      JSON.parse(window.localStorage.getItem(tokenSource.storageKey)) || {}
    );
  },

  getHyvaCheckoutStorage() {
    const storageKey = _get(config, 'hyvaStorageSource.storageKey');

    return JSON.parse(window.localStorage.getItem(storageKey)) || {};
  },

  getCustomerToken() {
    const tokenSource = _get(config, 'storageSource.token', {});

    return _get(LocalStorage.getMagentoLocalStorage(), tokenSource.value);
  },

  getCustomerShippingAddressId() {
    const source = _get(
      config,
      'hyvaStorageSource.data.customerShippingAddress',
      {}
    );

    return _get(LocalStorage.getHyvaCheckoutStorage(), source.value);
  },

  getCustomerBillingAddressId() {
    const source = _get(
      config,
      'hyvaStorageSource.data.customerBillingAddress',
      {}
    );

    return _get(LocalStorage.getHyvaCheckoutStorage(), source.value);
  },

  getBillingSameAsShippingInfo() {
    const source = _get(
      config,
      'hyvaStorageSource.data.billingSameAsShipping',
      {}
    );

    return _get(LocalStorage.getHyvaCheckoutStorage(), source.value, true);
  },

  saveCustomerToken(token) {
    const tokenSource = _get(config, 'storageSource.token', {});
    const storageData = _set(
      LocalStorage.getMagentoLocalStorage(),
      tokenSource.value,
      token
    );

    window.localStorage.setItem(
      tokenSource.storageKey,
      JSON.stringify(storageData)
    );
  },

  saveCartId(cartId) {
    const cartSource = _get(config, 'storageSource.cartId', {});
    const storageData = _set(
      LocalStorage.getMagentoLocalStorage(),
      cartSource.value,
      cartId
    );

    window.localStorage.setItem(
      cartSource.storageKey,
      JSON.stringify(storageData)
    );
  },

  saveCustomerShippingAddressId(addressId) {
    const storageKey = _get(config, 'hyvaStorageSource.storageKey');
    const source = _get(
      config,
      'hyvaStorageSource.data.customerShippingAddress',
      {}
    );
    const storageData = _set(
      LocalStorage.getHyvaCheckoutStorage(),
      source.value,
      addressId
    );

    window.localStorage.setItem(storageKey, JSON.stringify(storageData));
  },

  saveCustomerBillingAddressId(addressId) {
    const storageKey = _get(config, 'hyvaStorageSource.storageKey');
    const source = _get(
      config,
      'hyvaStorageSource.data.customerBillingAddress',
      {}
    );
    const storageData = _set(
      LocalStorage.getHyvaCheckoutStorage(),
      source.value,
      addressId
    );

    window.localStorage.setItem(storageKey, JSON.stringify(storageData));
  },

  saveBillingSameAsShipping(isSame) {
    const storageKey = _get(config, 'hyvaStorageSource.storageKey');
    const source = _get(
      config,
      'hyvaStorageSource.data.billingSameAsShipping',
      {}
    );
    const storageData = _set(
      LocalStorage.getHyvaCheckoutStorage(),
      source.value,
      isSame
    );

    window.localStorage.setItem(storageKey, JSON.stringify(storageData));
  },
};

export default LocalStorage;
