export const SET_PAYMENT_METHOD_ON_CART_PAYPAL_EXPRESS = `
    mutation setPaymentMethodOnCart(
    $payerId: String!
    $token: String!
    $cartId: String!
    $paymentCode: String!
  ) {
    setPaymentMethodOnCart(
      input: {
        cart_id: $cartId,
        payment_method: {
          code: $paymentCode
          paypal_express: {
            payer_id: $payerId
            token: $token
          }
        }
      }
    ) {
      cart {
        selected_payment_method {
          code
          title
        }
      }
    }
  }
`;
