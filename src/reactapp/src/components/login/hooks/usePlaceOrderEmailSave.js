import { useCallback } from 'react';
import { get as _get } from 'lodash-es';

import { __ } from '../../../i18n';
import { LOGIN_FORM } from '../../../config';
import useLoginAppContext from './useLoginAppContext';
import useLoginCartContext from './useLoginCartContext';

/**
 * This custom hook is used to perform email address save when "place order"
 * button is pressed and the email address is not synced to the backend.
 */
export default function usePlaceOrderEmailSave() {
  const { setErrorMessage } = useLoginAppContext();
  const { cartEmail, setEmailOnGuestCart } = useLoginCartContext();

  return useCallback(
    async (formikData) => {
      try {
        const email = _get(formikData, `values.${LOGIN_FORM}.email`);

        if (!cartEmail || cartEmail !== email) {
          await setEmailOnGuestCart(email);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage(__('Email address update failed. Please try again.'));
      }
    },
    [cartEmail, setEmailOnGuestCart, setErrorMessage]
  );
}
