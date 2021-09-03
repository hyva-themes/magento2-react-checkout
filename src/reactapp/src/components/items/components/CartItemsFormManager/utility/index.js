export function prepareCartItemsUniqueId(cartItems) {
  return cartItems.map(({ id, quantity }) => `${id}_${quantity}`).join('__');
}

export function prepareCartItemsFormData(cartItems) {
  return cartItems.reduce((accumulator, item) => {
    const cartItemId = parseInt(item.id, 10);
    accumulator[`item__${cartItemId}`] = {
      cart_item_id: cartItemId,
      quantity: parseFloat(item.quantity),
    };
    return accumulator;
  }, {});
}
