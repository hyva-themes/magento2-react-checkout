import { useContext } from 'react';

import CartContext from '../context/Cart/CartContext';

export default function useCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  return {
    ...cartData,
    ...cartActions,
  };
}
