import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { EMAILCHECK_AGEVERIFY_QUERY } from './query';

export default async function emailCheck(dispatch, email) {
  const variables = { email };

  return modifier(
    await sendRequest(dispatch, {
      query: EMAILCHECK_AGEVERIFY_QUERY,
      variables
    })
  );
}