import { CART_DATA_FRAGMENT } from '../../utility/query/cartQueryInfo';

export const REMOVE_COUPON_CODE_MUTATION = `
  mutation removeCouponFromCartMutation(
    $cartId: String!
  ) {
    removeCouponFromCart(
      input: {
        cart_id: $cartId
      }
    ) {
      cart {
        ${CART_DATA_FRAGMENT}
      }
    }
  }
`;
