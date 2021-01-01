import { config } from '../../../config';
import cartQueryInfo from '../utility/query/cartQueryInfo';

export const GET_GUEST_CART_QUERY = `query {
  cart(cart_id: "${config.cartId}") {
    ${cartQueryInfo}
  }
}`;
