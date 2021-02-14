import { CART_DATA_FRAGMENT } from '../utility/query/cartQueryInfo';

export const MERGE_CARTS_MUTATION = `
mutation mergeCartsMutation($sourceCartId: String!, $destinationCartId: String!) {
  mergeCarts(source_cart_id: $sourceCartId, destination_cart_id: $destinationCartId) {
    ${CART_DATA_FRAGMENT}
  }
}`;
