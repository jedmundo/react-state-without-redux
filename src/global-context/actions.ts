import { types } from './reducers'

export const useActions = (state: any, dispatch: any) => {

  function setUsername(username: string) {
    dispatch({ type: types.ADD_USERNAME, payload: username });
  }

  return {
    setUsername,
  };
};
