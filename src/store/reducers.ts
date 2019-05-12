import { GlobalAction, GlobalActionType } from './actions.model'

const initialState = {
  username: 'John Doe'
};

const reducer = (state = initialState, action: GlobalAction) => {
  console.log('Global State:', { oldState: state, type: action.type });
  switch (action.type) {
    case GlobalActionType.SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, reducer };
