import { getCheckoutAgreementsRequest } from '../../../api';
import { SET_CHECKOUT_AGREEMENTS } from './types';

export async function getCheckoutAgreementsAction(dispatch) {
  try {
    const checkoutAgreements = await getCheckoutAgreementsRequest(dispatch);

    dispatch({
      type: SET_CHECKOUT_AGREEMENTS,
      payload: checkoutAgreements,
    });
  } catch (error) {
    // @todo error message needs to be implemented
    console.error(error);
  }
}
