import { config } from '../../../config';
import { cartQueryResponse } from './cartQueryResponse';

export const setShippingMethodOnCartQuery = (carrier, method) => `mutation {
  setShippingMethodsOnCart(
    input: {
      cart_id: "${config.cartId}"
      shipping_methods: [
        {
          carrier_code: ${ carrier || "freeshipping"},
          method_code: "${ method || "freeshipping"},
        }
      ]
    }
  ) {
  cart {
    ${cartQueryResponse}
    }
  }
}`;
