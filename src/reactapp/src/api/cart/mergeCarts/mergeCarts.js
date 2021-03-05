import sendRequest from '../../sendRequest';
import modifier from './modifier';
import { MERGE_CARTS_MUTATION } from './mutation';

export default async function mergeCarts(cartIds) {
  return modifier(
    await sendRequest({ query: MERGE_CARTS_MUTATION, variables: cartIds })
  );
}
