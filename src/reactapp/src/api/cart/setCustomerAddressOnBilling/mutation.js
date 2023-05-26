import { CART_DATA_FRAGMENT } from '../utility/query/cartQueryInfo';

/**
 * When the cart contains only virtual products, usage of "same_as_shipping" gives
 * error. Hence we won't use "same_as_shipping" in the case of virtual products only
 * cart.
 */
export default function prepareMutation(isVirtualCart) {
  return `
    mutation setCustomerAddrOnCartBillingMutation(
      $cartId: String!
      $customerAddressId: Int!
      ${isVirtualCart ? '' : '$sameAsShipping: Boolean'}
    ) {
      setBillingAddressOnCart(
        input: {
          cart_id: $cartId
          billing_address: {
            customer_address_id: $customerAddressId
            ${isVirtualCart ? '' : 'same_as_shipping: $sameAsShipping'}
          }
        }
      ) {
        cart {
          ${CART_DATA_FRAGMENT}
        }
      }
    }
  `;
}
