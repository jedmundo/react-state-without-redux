import React, { createContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "./reducers";
import { useActions } from "./actions";

const DashboardContext = createContext(initialState);

const DashboardProvider: (bla: any) => JSX.Element = ({ children }) => {
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
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardProvider };
