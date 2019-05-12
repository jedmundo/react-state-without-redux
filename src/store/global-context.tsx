import React, { createContext, useReducer, useEffect } from 'react';

import { reducer, initialState } from './reducers';
import { useActions } from './actions'

const GlobalContext = createContext(initialState);

const GlobalProvider: (param: { children: JSX.Element }) => JSX.Element = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  // Log new state
  useEffect(
    () => {
      console.log('Global State', { newState: state });
    },
    [state]
  );

  const value = { state, dispatch, actions } as any

  // Render state, dispatch and special case actions
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
