import React, { useMemo, useReducer } from 'react';
import { node } from 'prop-types';
import cartReducer from './cartReducer';
import CartContext from './CartContext';
import cartDispatchers from './cartDispatcher';
import initialState from './initialState';

function CartDataProvider({ children }) {
  const [cartData, dispatch] = useReducer(cartReducer, initialState);
  const cartActions = useMemo(() => cartDispatchers(dispatch), [dispatch]);

  return (
    <CartContext.Provider value={[cartData, cartActions]}>
      {children}
    </CartContext.Provider>
  );
}

CartDataProvider.propTypes = {
  children: node.isRequired,
};

export default CartDataProvider;
