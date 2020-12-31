import mutation from './mutation';
import modifier from './modifier';
import { config } from '../../../../config';
import sendRequest from '../../../sendRequest';

export default async function setEmailOnGuestCart(email) {
  const query = mutation();
  const variables = { email, cartId: config.cartId };

  return modifier(await sendRequest({ query, variables }));
}
