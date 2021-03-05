import { CART_DATA_FRAGMENT } from '../utility/query/cartQueryInfo';

export const SET_CUSTOMER_ADDR_ON_CART_BILLING_ADDR_MUTATION = `
  mutation setCustomerAddrOnCartBillingMutation(
    $cartId: String!
    $customerAddressId: Int!
    $sameAsShipping: Boolean
  ) {
    setBillingAddressOnCart(
      input: {
        cart_id: $cartId
        billing_address: {
          customer_address_id: $customerAddressId
          same_as_shipping: $sameAsShipping
        }
      }
    ) {
      cart {
        ${CART_DATA_FRAGMENT}
      }
    }
  }
`;
