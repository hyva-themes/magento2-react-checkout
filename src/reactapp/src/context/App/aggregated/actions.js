import { AGGREGATED_APP_DATA } from './types';

export function storeAggregatedAppStatesAction(dispatch, data) {
  const {
    customer,
    countryList,
    storeConfig,
    rightColumnBlock,
    checkoutAgreements,
  } = data;

  dispatch({
    type: AGGREGATED_APP_DATA,
    payload: {
      ...customer,
      countryList,
      storeConfig,
      rightColumnBlock,
      checkoutAgreements,
    },
  });
}
