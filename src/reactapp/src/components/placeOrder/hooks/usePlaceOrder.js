import { __ } from '../../../i18n';
import usePlaceOrderAppContext from './usePlaceOrderAppContext';
import useCheckoutFormContext from '../../../hook/useCheckoutFormContext';

export default function usePlaceOrder() {
  const { setErrorMessage } = usePlaceOrderAppContext();
  const { submitHandler, checkoutFormValidationSchema } =
    useCheckoutFormContext();

  return async (values) => {
    try {
      const isValid = await checkoutFormValidationSchema.validate(values);

      if (isValid) {
        await submitHandler(values);
      }

      return isValid;
    } catch (error) {
      console.error(error);
      setErrorMessage(
        __('Your checkout details are not valid. Please verify your details.')
      );
      throw error;
    }
  };
}
