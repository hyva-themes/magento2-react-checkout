import { useContext } from 'react';

import AddressWrapperContext from '../context/AddressWrapperContext';

export default function useAddressWrapper() {
  return useContext(AddressWrapperContext);
}
