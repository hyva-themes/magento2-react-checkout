import { useContext } from 'react';
import BillingAddressFormikContext from '../context/BillingAddressFormikContext';

export default function useBillingAddressFormikContext() {
  return useContext(BillingAddressFormikContext);
}
