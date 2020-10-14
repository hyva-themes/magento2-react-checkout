import {config} from "../../../config";
import {cartQueryResponse} from "./cartQueryResponse";

export const getCartQuery = `query {
  cart(cart_id: "${config.cartId}") {
    ${cartQueryResponse}
  }
}`;
