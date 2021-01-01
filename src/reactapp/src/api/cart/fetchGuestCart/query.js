import { config } from '../../../config';
import cartShippingAddrInfo from '../utility/query/cartShippingAddrInfo';

export const GET_GUEST_CART_QUERY = `query {
  cart(cart_id: "${config.cartId}") {
    email
    ${cartShippingAddrInfo}
  }
}`;
