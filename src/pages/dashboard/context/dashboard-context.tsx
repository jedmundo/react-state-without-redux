import React, { createContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "./reducers";
import { useActions } from "./actions";

const DashboardContext = createContext(initialState);

const DashboardProvider: (bla: any) => JSX.Element = ({ children }) => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  const actions = useActions(state, dispatch);

  // Log new state
  useEffect(
    () => {
      console.log('Dashboard State', { newState: state });
    },
    [state]
  );

  const value = { state, dispatch, actions } as any

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardProvider };
