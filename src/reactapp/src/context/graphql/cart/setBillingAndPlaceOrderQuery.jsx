import { config } from '../../../config';
import { cartQueryResponse } from './cartQueryResponse';

export const placeOrderQuery = (address) => `mutation {
    setBillingAddressOnCart(
    input: {
      cart_id: "${config.cartId}"
      billing_address: {
        address: {
        ${address ||
            `
          firstname: "Bob"
          lastname: "Roll"
          company: "Magento"
          street: ["Magento Pkwy", "Main Street"]
          city: "Austin"
          region: "TX"
          postcode: "78758"
          country_code: "US"
          telephone: "8675309"
          save_in_address_book: true
        `}
        }
        same_as_shipping: false
      }
    }
  ) {
    cart {
      ${cartQueryResponse}
    }
  }
  setPaymentMethodOnCart(input: {
      cart_id: "${config.cartId}"
      payment_method: {
          code: "checkmo"
      }
  }) {
    cart {
      ${cartQueryResponse}
    }
  }
  placeOrder(
    input: {
      cart_id: "${config.cartId}"
    }
  ) {
    order {
      order_number
    }
  }
}`;
