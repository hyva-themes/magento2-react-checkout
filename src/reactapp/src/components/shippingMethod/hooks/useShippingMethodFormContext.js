import { useContext } from 'react';

import ShippingMethodFormContext from '../context/ShippingMethodFormContext';

export default function useShippingMethodFormContext() {
  return useContext(ShippingMethodFormContext);
}
