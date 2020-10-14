import { config } from '../../../config';
import { cartQueryResponse } from './cartQueryResponse';

export const setEmailOnGuestCartQuery = (email) => `mutation {
  setGuestEmailOnCart(
    input: {
      cart_id: "${config.cartId}",
      email: "${email}"
    }
  ) {
  cart {
    ${cartQueryResponse}
    }
  }
}`;
