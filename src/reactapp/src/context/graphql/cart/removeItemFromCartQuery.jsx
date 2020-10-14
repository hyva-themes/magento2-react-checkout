import {config} from "../../../config";
import {cartQueryResponse} from "./cartQueryResponse";

export const removeItemFromCartQuery = itemId => `mutation {
  removeItemFromCart(
    input: {
      cart_id: "${config.cartId}"
      cart_item_id: ${itemId}
    }
  ) {
    cart {
      ${cartQueryResponse}
    }
  }
}`;
