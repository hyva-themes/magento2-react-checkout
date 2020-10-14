import {config} from "../../../config";
import {cartQueryResponse} from "./cartQueryResponse";

export const updateCartItemsQuery = (itemId, quantity) => `mutation {
  updateCartItems(
    input: {
      cart_id: "${config.cartId}"
      cart_items: [
        {
          cart_item_id: ${itemId}
          quantity: ${quantity}
        }
      ]
    }
  ) {
    cart {
      ${cartQueryResponse}
    }
  }
}`;
