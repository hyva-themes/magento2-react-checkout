export function prepareCartItemsUniqueId(cartItems) {
  return cartItems.map(({ id, quantity }) => `${id}_${quantity}`).join('__');
}
