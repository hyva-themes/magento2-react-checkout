import { useContext } from 'react';

import CartItemFormContext from '../context/CartItemsFormContext';

export default function useItemsFormContext() {
  return useContext(CartItemFormContext);
}
