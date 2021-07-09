import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { MERGE_CARTS_MUTATION } from './mutation';

export default async function mergeCarts(dispatch, cartIds) {
  return modifier(
    await sendRequest(dispatch, {
      query: MERGE_CARTS_MUTATION,
      variables: cartIds,
    })
  );
}
