import { string, shape } from 'prop-types';

export const shippingMethodShape = shape({
  methodCode: string,
  carrierCode: string,
});
