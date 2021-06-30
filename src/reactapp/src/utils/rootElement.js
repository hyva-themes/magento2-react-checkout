import _get from 'lodash.get';

const RootElement = {
  elem: document.getElementById('react-checkout'),
  checkoutConfig: null,

  getElement() {
    return RootElement.elem;
  },

  /**
   * Need to specify `data-language` attribute on the root element;
   */
  getLanguage() {
    return _get(RootElement.getCheckoutConfig(), 'language');
  },

  getFilePath() {
    return _get(RootElement.getElement(), 'dataset.static_file_path', '');
  },

  getPaymentConfig() {
    return _get(RootElement.getCheckoutConfig(), 'payment', {});
  },

  getDefaultCountryId() {
    return _get(RootElement.getCheckoutConfig(), 'defaultCountryId');
  },

  getCheckoutConfig() {
    if (!RootElement.checkoutConfig) {
      RootElement.checkoutConfig = JSON.parse(
        _get(RootElement.getElement(), 'dataset.checkout_config', '{}') || '{}'
      );
    }

    return RootElement.checkoutConfig;
  },
};

export default RootElement;
