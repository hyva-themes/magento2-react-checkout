import _get from 'lodash.get';
import _set from 'lodash.set';

import { config } from '../config';

const LS = {
  getMagentoLocalStorage() {
    const tokenSource = _get(config, 'storageSource.token', {});

    return (
      JSON.parse(window.localStorage.getItem(tokenSource.storageKey)) || {}
    );
  },

  getCustomerToken() {
    const tokenSource = _get(config, 'storageSource.token', {});

    return _get(LS.getMagentoLocalStorage(), tokenSource.value);
  },

  saveCustomerToken(token) {
    const tokenSource = _get(config, 'storageSource.token', {});
    const storageData = _set(
      LS.getMagentoLocalStorage(),
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
      LS.getMagentoLocalStorage(),
      cartSource.value,
      cartId
    );

    window.localStorage.setItem(
      cartSource.storageKey,
      JSON.stringify(storageData)
    );
  },
};

export default LS;
