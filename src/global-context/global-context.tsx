import React, { createContext, useReducer, useEffect } from 'react';
import { reducer, initialState } from './reducers';
import { useActions } from './actions';

const GlobalContext = createContext(initialState);

const GlobalProvider: (bla: any) => JSX.Element = ({ children }) => {
  // Set up reducer with useReducer and our defined reducer, initialState from reducers.js
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  // Create an object of all our actions, handling special cases where a simple dispatch is too primitive
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
