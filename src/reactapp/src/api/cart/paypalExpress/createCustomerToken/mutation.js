export const CREATE_PAYPAL_EXPRESS_TOKEN = `
mutation createPaypalExpressToken(
    $cartId: String!
    $returnUrl: String!
    $cancelUrl: String!
  ) {
    createPaypalExpressToken(
      input: {
        cart_id: $cartId
        code: "paypal_express"
        express_button: true
        urls: {
          return_url: $returnUrl,
          cancel_url: $cancelUrl
        }
      }
    ) {
      token
      paypal_urls {
        start
        edit
      }
    }
  }
`;
