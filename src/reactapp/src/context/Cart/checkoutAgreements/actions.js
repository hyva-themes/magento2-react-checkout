import { getCheckoutAgreementsRequest } from '../../../api';
import { GET_CHECKOUT_AGREEMENTS, CHANGE_CHECKOUT_AGREEMENTS } from './types';

export async function getCheckoutAgreementsAction(dispatch) {
  try {
    const checkoutAgreements = await getCheckoutAgreementsRequest();

    dispatch({
      type: GET_CHECKOUT_AGREEMENTS,
      payload: checkoutAgreements.data.checkoutAgreements,
    });
  } catch (error) {
    // @todo error message needs to be implemented
  }
}

export function changeCheckoutAgreementAction(dispatch, agreementId, value) {
  try {
    dispatch({
      type: CHANGE_CHECKOUT_AGREEMENTS,
      payload: { agreementId, value },
    });
  } catch (error) {
    // @todo error message needs to be implemented
  }
}
