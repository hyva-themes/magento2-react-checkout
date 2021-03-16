import { useContext } from 'react';
import Context from '../../context/Form/BillingAddress/BillingAddressFormContext';

export default function useBillingAddressContext() {
  return useContext(Context);
}

export const BillingAddressFormContext = Context;
