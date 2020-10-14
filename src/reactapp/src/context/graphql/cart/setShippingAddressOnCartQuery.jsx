import { config } from '../../../config';
import { cartQueryResponse } from './cartQueryResponse';

export const setShippingAddressOnCartQuery = address => `mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "${config.cartId}"
      shipping_addresses: [
        ${address ||
            `{
          address: {
            firstname: "test firstname"
            lastname: "test lastname"
            company: "test company"
            street: ["test street 1", "test street 2"]
            city: "test city"
            region: "TX"
            postcode: "887766"
            country_code: "US"
            telephone: "88776655"
            save_in_address_book: false
          }
        }`}
      ]
    }
  ) {
  cart {
    ${cartQueryResponse}
    }
  }
}`;
