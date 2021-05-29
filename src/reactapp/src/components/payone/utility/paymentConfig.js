import _get from 'lodash.get';
import { PAYMENT_METHOD_FORM } from '../../../config';

import LocalStorage from '../../../utils/localStorage';
import RootElement from '../../../utils/rootElement';

const config = RootElement.getPaymentConfig();
const inputStyles =
  'width:100%;border: 1px solid #e2e8f0; padding: .5rem .75rem;margin:0;min-height:24px;border-radius:0.25rem;font-size: 1rem;line-height: 1.5;';
const selectStyles =
  'width:100%;border: 1px solid #e2e8f0; padding: .5rem .75rem;margin:0;min-height:24px;border-radius:0.25rem;font-size: 1rem;line-height: 1.5;';
const iframe = { height: '50px', width: '100%' };
const payOne = config.payment.payone;
const {
  hostedRequest,
  fieldConfig,
  availableCardTypes,
  ccMinValidity,
  savedPaymentData,
  checkCvc,
  saveCCDataEnabled,
} = payOne;

const paymentConfig = {
  request: hostedRequest,
  fieldConfig: {
    ...fieldConfig,
    fields: {
      ...fieldConfig.fields,
      cardexpiremonth: {
        ...fieldConfig.fields.cardexpiremonth,
        iframe,
      },
      cardexpireyear: {
        ...fieldConfig.fields.cardexpireyear,
        iframe,
      },
    },
    defaultStyle: {
      ...fieldConfig.defaultStyle,
      iframe,
      input: inputStyles,
      select: selectStyles,
    },
  },
  ccMinValidity,
  availableCardTypes,
  savedPaymentData,
  isAutoCardtypeDetectionEnabled: !!fieldConfig.autoCardtypeDetection,
  checkCvc,

  isSaveDataEnabled() {
    return saveCCDataEnabled && !!LocalStorage.getCustomerToken();
  },

  useSavedData() {
    return paymentConfig.isSaveDataEnabled() && !!savedPaymentData.length;
  },

  isSavedPaymentDataUsed(values) {
    const selectedCard = _get(values, `${PAYMENT_METHOD_FORM}.selectedCard`);

    return paymentConfig.useSavedData() && selectedCard !== 'new';
  },
};

export default paymentConfig;
