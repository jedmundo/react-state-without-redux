import { GlobalAction, GlobalActionType } from './actions.model'

export interface GlobalState {
  username: string
}

export const useActions = (state: GlobalState, dispatch: React.Dispatch<GlobalAction>) => {

  const setUsername = (username: string): void => {
    dispatch({ type: GlobalActionType.SET_USERNAME, payload: username });
  }

  return {
    setUsername,
  }
}
