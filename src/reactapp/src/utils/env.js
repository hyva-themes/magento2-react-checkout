const {
  HYVA_BASE_URL: baseUrl,
  HYVA_LANGUAGE: language,
  HYVA_STORE_CODE: storeCode,
  HYVA_CURRENCY_CODE: currencyCode,
  HYVA_CURRENCY_SYMBOL: currencySymbol,
  HYVA_DEFAULT_COUNTRY: defaultCountry,
} = import.meta.env;

export default {
  baseUrl,
  language,
  storeCode,
  currencyCode,
  currencySymbol,
  defaultCountry,
};
