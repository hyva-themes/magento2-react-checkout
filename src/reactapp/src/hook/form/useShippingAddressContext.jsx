import { useContext } from 'react';
import ShippingAddressFormContext from '../../context/Form/ShippingAddress/ShippingAddressFormContext';

export default function useShippingAddressContext() {
  return useContext(ShippingAddressFormContext);
}
