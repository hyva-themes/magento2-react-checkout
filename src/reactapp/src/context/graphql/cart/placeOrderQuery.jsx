import { config } from '../../../config';
import { cartQueryResponse } from './cartQueryResponse';
import { billingAddressFormikToGql } from '../../../utils/billingAddressFormikToGql';

export const placeOrderQuery = address => `mutation {
    setBillingAddressOnCart(
    input: {
      cart_id: "${config.cartId}"
      billing_address: {
        address: ${billingAddressFormikToGql(address)}
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
          code: "${config.defaultPaymentMethod}"
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
