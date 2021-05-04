import { useContext } from 'react';
import ShippingAddressWrapperContext from '../context/ShippingAddressWrapperContext';

export default function useShippingAddressWrapper() {
  return useContext(ShippingAddressWrapperContext);
}
