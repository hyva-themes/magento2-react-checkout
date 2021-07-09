import _get from 'lodash.get';
import _set from 'lodash.set';

import { config } from '../config';
import { _cleanObjByKeys, _keys } from './index';

const hyvaStorageKey = _get(config, 'hyvaStorageSource.storageKey');
const mostRecentlyUsedAddressListSource = _get(
  config,
  'hyvaStorageSource.data.mostRecentlyUsedAddressList',
  {}
);

const LocalStorage = {
  isBrowser() {
    return typeof window !== 'undefined';
  },

  getMagentoLocalStorage() {
    const tokenSource = _get(config, 'storageSource.token', {});

    if (!LocalStorage.isBrowser()) {
      return {};
    }

    return JSON.parse(
      window.localStorage.getItem(tokenSource.storageKey) || '{}'
    );
  },

  getHyvaCheckoutStorage() {
    if (!LocalStorage.isBrowser()) {
      return {};
    }

    return JSON.parse(window.localStorage.getItem(hyvaStorageKey) || '{}');
  },

  getCartId() {
    const source = _get(config, 'storageSource.cartId', {});

    return _get(LocalStorage.getMagentoLocalStorage(), source.value);
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

  getMostlyRecentlyUsedAddressList() {
    return (
      _get(
        LocalStorage.getHyvaCheckoutStorage(),
        mostRecentlyUsedAddressListSource.value,
        {}
      ) || {}
    );
  },

  saveCustomerToken(token) {
    if (!LocalStorage.isBrowser()) {
      return;
    }

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
    if (!LocalStorage.isBrowser()) {
      return;
    }

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
    if (!LocalStorage.isBrowser()) {
      return;
    }

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

    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },

  saveCustomerBillingAddressId(addressId) {
    if (!LocalStorage.isBrowser()) {
      return;
    }

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

    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },

  saveBillingSameAsShipping(isSame) {
    if (!LocalStorage.isBrowser()) {
      return;
    }

    const source = _get(
      config,
      'hyvaStorageSource.data.billingSameAsShipping',
      {}
    );
    const storageData = _set(
      LocalStorage.getHyvaCheckoutStorage(),
      source.value,
      !!isSame
    );

    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },

  saveCustomerAddressInfo(addressId, isBillingSame, isShipping = true) {
    LocalStorage.saveBillingSameAsShipping(isBillingSame);

    if (isShipping) {
      LocalStorage.saveCustomerShippingAddressId(addressId);
    } else {
      LocalStorage.saveCustomerBillingAddressId(addressId);
    }

    if (isBillingSame) {
      LocalStorage.saveCustomerBillingAddressId(addressId);
    } else {
      const selectedShippingAddrId = LocalStorage.getCustomerShippingAddressId();

      if (selectedShippingAddrId === addressId) {
        LocalStorage.saveBillingSameAsShipping(true);
      }
    }
  },

  addAddressToMostRecentlyUsedList(newAddress) {
    const existingAddrList = LocalStorage.getMostlyRecentlyUsedAddressList();
    const newAddressId = `new_address_${_keys(existingAddrList).length + 1}`;

    _set(newAddress, 'id', newAddressId);
    const storageData = _set(
      LocalStorage.getHyvaCheckoutStorage(),
      mostRecentlyUsedAddressListSource.value,
      {
        ...existingAddrList,
        [newAddressId]: newAddress,
      }
    );

    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },

  updateMostRecentlyAddedAddress(addressId, addressToUpdate) {
    const existingAddrList = LocalStorage.getMostlyRecentlyUsedAddressList();

    _set(existingAddrList, addressId, addressToUpdate);

    const storageData = _set(
      LocalStorage.getHyvaCheckoutStorage(),
      mostRecentlyUsedAddressListSource.value,
      existingAddrList
    );

    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },

  removeMostRecentlyUsedAddress(addressId) {
    const existingAddrList = LocalStorage.getMostlyRecentlyUsedAddressList();

    const storageData = _set(
      LocalStorage.getHyvaCheckoutStorage(),
      mostRecentlyUsedAddressListSource.value,
      _cleanObjByKeys(existingAddrList, [addressId])
    );

    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },

  clearCheckoutStorage() {
    if (!LocalStorage.isBrowser()) {
      return;
    }

    window.localStorage.setItem(hyvaStorageKey, '{}');
    LocalStorage.saveCartId('');
  },
};

export default LocalStorage;
