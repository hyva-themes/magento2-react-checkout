import { string, shape } from 'prop-types';

import { config } from '../config';
import LocalStorage from './localStorage';

export const paymentMethodShape = shape({ title: string, code: string });

export function performRedirect(order) {
  const orderNumber = order?.order_number;

  if (orderNumber && config.isProductionMode) {
    LocalStorage.clearCheckoutStorage();
    window.location.replace(`${config.baseUrl}/checkout/onepage/success`);
  }
}
