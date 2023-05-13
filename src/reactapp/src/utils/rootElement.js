import { get as _get } from 'lodash-es';

const RootElement = {
  elem: document.getElementById('react-checkout'),
  checkoutConfig: null,

  getElement() {
    return RootElement.elem;
  },

  getLanguage() {
    return _get(RootElement.getCheckoutConfig(), 'language');
  },

  getCurrency() {
    return _get(RootElement.getCheckoutConfig(), 'currency') || {};
  },

  getFilePath() {
    return _get(RootElement.getElement(), 'dataset.static_file_path', '');
  },

  getPaymentConfig() {
    return _get(RootElement.getCheckoutConfig(), 'payment') || {};
  },

  getDefaultCountryId() {
    return _get(RootElement.getCheckoutConfig(), 'defaultCountryId');
  },

  getStoreCode() {
    return _get(RootElement.getCheckoutConfig(), 'storeCode');
  },

  getBaseUrl() {
    let baseUrl = _get(RootElement.getElement(), 'dataset.base_url', '');

    if (baseUrl.substr(-1) === '/') {
      baseUrl = baseUrl.substr(0, baseUrl.length - 1);
    }

    return baseUrl;
  },

  getCheckoutConfig() {
    if (!RootElement.checkoutConfig) {
      RootElement.checkoutConfig = JSON.parse(
        _get(RootElement.getElement(), 'dataset.checkout_config', '{}') || '{}'
      );
    }

    return RootElement.checkoutConfig;
  },

  getCartMaskedId() {
    return _get(RootElement.getCheckoutConfig(), 'cartMaskedId');
  },
};

export default RootElement;
