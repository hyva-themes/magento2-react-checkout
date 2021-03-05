import { GENERATE_CUSTOMER_TOKEN_MUTATION } from './mutation';
import modifier from './modifier';
import sendRequest from '../../sendRequest';

export default async function generateToken(userCredentials) {
  const variables = { ...userCredentials };

  const output = modifier(
    await sendRequest({ query: GENERATE_CUSTOMER_TOKEN_MUTATION, variables })
  );

  if (output.error) {
    throw new Error(output.error);
  }

  return output;
}
