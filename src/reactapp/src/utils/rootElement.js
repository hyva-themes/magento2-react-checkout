import _get from 'lodash.get';

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
    return _get(RootElement.getCheckoutConfig(), 'currency', {});
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

  getStoreCode() {
    return _get(RootElement.getCheckoutConfig(), 'storeCode');
  },

  // true or false
  getDisplayShippingPriceExTax() {
    return _get(RootElement.getCheckoutConfig(), 'isDisplayShippingPriceExclTax');
  },

  // true or false
  getDisplayShippingBothPrices() {
    return _get(RootElement.getCheckoutConfig(), 'isDisplayShippingBothPrices');
  },  
  
  // including, excluding, or both
  getDisplayCartShippingPrices() {
    return _get(RootElement.getCheckoutConfig(), 'reviewShippingDisplayMode');
  },

  // including, excluding, or both
  getDisplayCartItemPrices() {
    return _get(RootElement.getCheckoutConfig(), 'reviewItemPriceDisplayMode');
  },

  // including, excluding, or both
  getDisplaySubTotalPrices() {
    return _get(RootElement.getCheckoutConfig(), 'reviewTotalsDisplayMode');
  },

  // true or false
  getDisplayGrandTotalPrices() {
    return _get(RootElement.getCheckoutConfig(), 'includeTaxInGrandTotal');
  },

  // true or false
  getDisplayFullTaxSummary() {
    return _get(RootElement.getCheckoutConfig(), 'isFullTaxSummaryDisplayed');
  },

  // true or false
  getDisplayZeroTax() {
    return _get(RootElement.getCheckoutConfig(), 'isZeroTaxDisplayed');
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
};

export default RootElement;
