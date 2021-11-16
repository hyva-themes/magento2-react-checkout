import { number as YupNumber, object as YupObject } from 'yup';

import { __ } from '../../../../../../../i18n';
import { _keys } from '../../../../../../../utils';

export function prepareCartItemsUniqueId(cartItems) {
  return cartItems.map(({ id, quantity }) => `${id}_${quantity}`).join('__');
}

export function prepareCartItemFormikData(cartItems) {
  return cartItems.reduce((accumulator, item) => {
    const cartItemId = parseInt(item.id, 10);
    accumulator[`${cartItemId}_qty`] = parseFloat(item.quantity);
    return accumulator;
  }, {});
}

export function prepareCartItemsValidationSchema(cartItemFormData) {
  const validationSchema = {};

  _keys(cartItemFormData).forEach((itemKey) => {
    validationSchema[itemKey] = YupNumber()
      .required(__('Required'))
      .min(1, __('Invalid qty'));
  });

  return validationSchema;
}

export function validate(schemaRules, data) {
  return YupObject().shape(schemaRules).validate(data);
}

export function prepareCartDataToUpdate(cartItemsValue) {
  return _keys(cartItemsValue).reduce((accumulator, itemKey) => {
    const itemId = Number(itemKey.replace('_qty', ''));
    accumulator.push({
      cart_item_id: itemId,
      quantity: parseFloat(cartItemsValue[itemKey]),
    });
    return accumulator;
  }, []);
}
