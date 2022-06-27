import React, { useMemo, useReducer } from 'react';
import { node } from 'prop-types';

import appReducer from './appReducer';
import AppContext from './AppContext';
import appDispatchers from './appDispatcher';
import initialState from './initialState';

function AppDataProvider({ children }) {
  const [appData, dispatch] = useReducer(appReducer, initialState);
  const appActions = useMemo(() => appDispatchers(dispatch), [dispatch]);
  const context = useMemo(() => [appData, appActions], [appData, appActions]);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

AppDataProvider.propTypes = {
  children: node.isRequired,
};

export default AppDataProvider;
