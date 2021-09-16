import { GENERATE_CUSTOMER_TOKEN_MUTATION } from './mutation';
import modifier from './modifier';
import sendRequest from '../../sendRequest';

export default async function generateToken(dispatch, userCredentials) {
  const variables = { ...userCredentials };

  const output = modifier(
    await sendRequest(dispatch, {
      variables,
      query: GENERATE_CUSTOMER_TOKEN_MUTATION,
    })
  );

  if (output.error) {
    throw new Error(output.error);
  }

  return output;
}
