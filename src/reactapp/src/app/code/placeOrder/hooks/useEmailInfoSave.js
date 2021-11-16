import _get from 'lodash.get';

import { __ } from '../../../../i18n';
import { LOGIN_FORM } from '../../../../config';
import usePlaceOrderAppContext from './usePlaceOrderAppContext';
import usePlaceOrderCartContext from './usePlaceOrderCartContext';

const emailField = `${LOGIN_FORM}.email`;

export default function useEmailInfoSave() {
  const { setErrorMessage } = usePlaceOrderAppContext();
  const { email: cartEmail, setEmailOnGuestCart } = usePlaceOrderCartContext();

  return async (values) => {
    try {
      const email = _get(values, emailField);

      if (!cartEmail || cartEmail !== email) {
        await setEmailOnGuestCart(email);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Email address update failed. Please try again.'));
    }
  };
}
