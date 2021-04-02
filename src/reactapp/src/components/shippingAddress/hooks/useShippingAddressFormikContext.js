import { useContext } from 'react';
import ShippingAddressFormikContext from '../context/ShippingAddressFormikContext';

export default function useShippingAddressFormikContext() {
  return useContext(ShippingAddressFormikContext);
}
