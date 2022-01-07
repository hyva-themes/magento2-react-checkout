import { CART_DATA_FRAGMENT } from '../../utility/query/cartQueryInfo';

export const APPLY_COUPON_CODE_MUTATION = `
  mutation applyCouponToCartMutation(
    $cartId: String!
    $couponCode: String!
  ) {
    applyCouponToCart(
      input: {
        cart_id: $cartId
        coupon_code: $couponCode
      }
    ) {
      cart {
        ${CART_DATA_FRAGMENT}
      }
    }
  }
`;
