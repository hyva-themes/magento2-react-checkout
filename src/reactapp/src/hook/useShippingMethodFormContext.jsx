import { useContext } from 'react';
import ShippingMethodFormContext from '../context/Form/ShippingMethod/ShippingMethodFormContext';

export default function useShippingMethodFormContext() {
  return useContext(ShippingMethodFormContext);
}
