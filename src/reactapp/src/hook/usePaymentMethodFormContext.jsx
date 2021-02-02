import { useContext } from 'react';

import PaymentMethodFormContext from '../context/Form/PaymentMethod/PaymentMethodFormContext';

export default function usePaymentMethodFormContext() {
  return useContext(PaymentMethodFormContext);
}
