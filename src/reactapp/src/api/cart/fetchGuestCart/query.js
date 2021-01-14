import { config } from '../../../config';
import cartBillingAddrInfo from '../utility/query/cartBillingAddrInfo';
import cartItemsInfo from '../utility/query/cartItemsInfo';
import cartPriceInfo from '../utility/query/cartPriceInfo';
import cartShippingAddrInfo from '../utility/query/cartShippingAddrInfo';

export const GET_GUEST_CART_QUERY = `query {
  cart(cart_id: "${config.cartId}") {
    email
    ${cartItemsInfo}
    ${cartBillingAddrInfo}
    ${cartShippingAddrInfo}
    ${cartPriceInfo}
  }
}`;
