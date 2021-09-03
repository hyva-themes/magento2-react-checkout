import { AGGREGATED_APP_DATA } from './types';

export async function storeAggregatedAppStatesAction(dispatch, data) {
  const { customer, countryList, checkoutAgreements, stateList } = data;

  return dispatch({
    type: AGGREGATED_APP_DATA,
    payload: {
      ...customer,
      stateList,
      countryList,
      checkoutAgreements,
    },
  });
}
