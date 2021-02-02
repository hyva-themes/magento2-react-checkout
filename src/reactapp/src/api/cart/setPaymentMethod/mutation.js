import { CART_DATA_FRAGMENT } from '../utility/query/cartQueryInfo';

export const SET_PAYMENT_METHOD_MUTATION = `
mutation setPaymentMethodMutation(
  $cartId: String!,
  $code: String!,
) {
  setPaymentMethodOnCart(
    input: {
      cart_id: $cartId
      payment_method: {
        code: $code
      }
    }
  ) {
  cart {
    ${CART_DATA_FRAGMENT}
    }
  }
}
`;
