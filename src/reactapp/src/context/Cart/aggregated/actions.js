import { AGGREGATED_CART_DATA } from './types';

export function storeAggregatedCartStatesAction(dispatch, appDispatch, data) {
  const { cart } = data;

  return dispatch({
    type: AGGREGATED_CART_DATA,
    payload: { cart },
  });
}
