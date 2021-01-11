import { useContext } from 'react';
import CartItemFormContext from '../context/Form/CartItems/CartItemsFormContext';

export default function useCartItemsFormContext() {
  return useContext(CartItemFormContext);
}
