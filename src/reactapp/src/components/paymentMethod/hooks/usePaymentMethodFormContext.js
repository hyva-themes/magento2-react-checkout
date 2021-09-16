import { useContext } from 'react';
import PaymentMethodFormContext from '../context/PaymentMethodFormContext';

export default function usePaymentMethodFormContext() {
  return useContext(PaymentMethodFormContext);
}
