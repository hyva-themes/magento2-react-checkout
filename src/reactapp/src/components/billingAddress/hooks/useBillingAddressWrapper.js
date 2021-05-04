import { useContext } from 'react';
import BillingAddressWrapperContext from '../context/BillingAddressWrapperContext';

export default function useBillingAddressWrapper() {
  return useContext(BillingAddressWrapperContext);
}
