import mutation from './mutation';
import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { config } from '../../../../config';

export default async function setEmailOnGuestCart(email) {
  const query = mutation();
  const variables = { email, cartId: config.cartId };

  return modifier(await sendRequest({ query, variables }));
}
