import { useContext } from 'react';
import CartContext from '../context/Cart/CartContext';

export default function useCartContext() {
  return useContext(CartContext);
}
