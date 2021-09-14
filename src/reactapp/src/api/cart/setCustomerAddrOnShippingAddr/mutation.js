import { CART_DATA_FRAGMENT } from '../utility/query/cartQueryInfo';

export const SET_CUSTOMER_ADDR_ON_CART_SHIPPING_ADDR_MUTATION = `
  mutation setCustomerAddrOnCartShippingAddrMutation(
    $cartId: String!
    $customerAddressId: Int!
  ) {
    setShippingAddressesOnCart(
      input: {
        cart_id: $cartId
        shipping_addresses: {
          customer_address_id: $customerAddressId
        }
      }
    ) {
      cart {
        ${CART_DATA_FRAGMENT}
      }
    }
  }
`;
