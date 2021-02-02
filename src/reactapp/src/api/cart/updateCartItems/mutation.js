import { CART_DATA_FRAGMENT } from '../utility/query/cartQueryInfo';

export const UPDATE_CART_ITEM_MUTATION = `
  mutation updateCartItemsMutation (
    $cartId: String!,
    $cartItems: [CartItemUpdateInput]!
  ) {
    updateCartItems(
      input: {
        cart_id: $cartId,
        cart_items: $cartItems
      }
    ) {
      cart {
        ${CART_DATA_FRAGMENT}
      }
    }
  }
`;
