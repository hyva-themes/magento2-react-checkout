import { CREATE_PAYPAL_EXPRESS_TOKEN } from './mutation';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';
import modifier from './modifier';

export default async function createCustomerToken(createTokenInput) {
  const variables = { ...createTokenInput, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest({ query: CREATE_PAYPAL_EXPRESS_TOKEN, variables })
  );
}
