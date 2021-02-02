import PLACE_ORDER_MUTATION from './mutation';
import modifier from './modifier';
import { config } from '../../../config';
import sendRequest from '../../sendRequest';

export default async function placeOrder() {
  const variables = { cartId: config.cartId };

  return modifier(
    await sendRequest({ query: PLACE_ORDER_MUTATION, variables })
  );
}
