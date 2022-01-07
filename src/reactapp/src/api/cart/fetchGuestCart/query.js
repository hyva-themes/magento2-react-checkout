import cartItemsInfo from '../utility/query/cartItemsInfo';
import cartPriceInfo from '../utility/query/cartPriceInfo';
import cartBillingAddrInfo from '../utility/query/cartBillingAddrInfo';
import cartShippingAddrInfo from '../utility/query/cartShippingAddrInfo';
import cartPaymentMethodsInfo from '../utility/query/cartPaymentMethodsInfo';

export const CART_QUERY_PART = `
  cart(cart_id: $cartId) {
    id
    email
    applied_coupons {
      code
    }
    ${cartItemsInfo}
    ${cartPriceInfo}
    ${cartBillingAddrInfo}
    ${cartShippingAddrInfo}
    ${cartPaymentMethodsInfo}
  }
`;

export const GET_GUEST_CART_QUERY = `
  query getGuestCartQuery($cartId: String!) {
    ${CART_QUERY_PART}
  }
`;
