import React, { createContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "./reducers";
import { useActions } from "./actions";

const StoreContext = createContext(initialState);

const StoreProvider: (bla: any) => JSX.Element = ({ children }) => {
  // Set up reducer with useReducer and our defined reducer, initialState from reducers.js
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  // Create an object of all our actions, handling special cases where a simple dispatch is too primitive
  const actions = useActions(state, dispatch);

  // Log new state
  useEffect(
    () => {
      console.log('Local State', { newState: state });
    },
    [state]
  );

  const value = { state, dispatch, actions } as any

  // Render state, dispatch and special case actions
  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
