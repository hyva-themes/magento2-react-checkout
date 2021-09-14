const PLACE_ORDER_MUTATION = `
mutation placeOrderMutation($cartId: String!) {
  placeOrder(input: { cart_id: $cartId}){
    order {
      order_number
    }
  }
}
`;

export default PLACE_ORDER_MUTATION;
