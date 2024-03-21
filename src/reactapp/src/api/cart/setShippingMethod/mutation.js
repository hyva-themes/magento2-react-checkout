import { CART_DATA_FRAGMENT } from '../utility/query/cartQueryInfo';

export const SET_SHIPPING_METHOD_MUTATION = `
mutation setShippingMethodMutation(
  $cartId: String!,
  $carrierCode: String!,
  $methodCode: String!
) {
  setShippingMethodsOnCart(
    input: {
      cart_id: $cartId
      shipping_methods: [
        {
          carrier_code: $carrierCode
          method_code: $methodCode
        }
      ]
    }
  ) {
  cart {
    ${CART_DATA_FRAGMENT}
    }
  }
}
`;
