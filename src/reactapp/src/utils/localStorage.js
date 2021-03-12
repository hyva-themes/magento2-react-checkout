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

  getCustomerToken() {
    const tokenSource = _get(config, 'storageSource.token', {});

    return _get(LocalStorage.getMagentoLocalStorage(), tokenSource.value);
  },

  getCustomerShippingAddressId() {
    const source = _get(config, 'storageSource.customerShippingAddress', {});

    return _get(LocalStorage.getMagentoLocalStorage(), source.value);
  },

  getBillingSameAsShippingInfo() {
    const source = _get(config, 'storageSource.billingSameAsShipping', {});

    return _get(LocalStorage.getMagentoLocalStorage(), source.value);
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
    const source = _get(config, 'storageSource.customerShippingAddress', {});
    const storageData = _set(
      LocalStorage.getMagentoLocalStorage(),
      source.value,
      addressId
    );

    window.localStorage.setItem(source.storageKey, JSON.stringify(storageData));
  },

  saveCustomerBillingAddressId(addressId) {
    const source = _get(config, 'storageSource.customerBillingAddress', {});
    const storageData = _set(
      LocalStorage.getMagentoLocalStorage(),
      source.value,
      addressId
    );

    window.localStorage.setItem(source.storageKey, JSON.stringify(storageData));
  },

  saveBillingSameAsShipping(isSame) {
    const source = _get(config, 'storageSource.billingSameAsShipping', {});
    const storageData = _set(
      LocalStorage.getMagentoLocalStorage(),
      source.value,
      isSame
    );

    window.localStorage.setItem(source.storageKey, JSON.stringify(storageData));
  },
};

export default LocalStorage;
