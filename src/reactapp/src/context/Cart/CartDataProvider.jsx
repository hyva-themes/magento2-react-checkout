import React, { useMemo, useReducer } from 'react';
import { node } from 'prop-types';

import cartReducer from './cartReducer';
import CartContext from './CartContext';
import initialState from './initialState';
import { useAppContext } from '../../hooks';
import cartDispatchers from './cartDispatcher';

function CartDataProvider({ children }) {
  const [cartData, dispatch] = useReducer(cartReducer, initialState);
  const { appDispatch } = useAppContext();
  const cartActions = useMemo(
    () => cartDispatchers(dispatch, appDispatch),
    [dispatch, appDispatch]
  );

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
