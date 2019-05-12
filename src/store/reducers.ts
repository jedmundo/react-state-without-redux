import { GlobalAction } from './actions.model'
const initialState = {
  username: 'John Doe'
};

const types = {
  ADD_USERNAME: "ADD_USERNAME",
};

const reducer = (state = initialState, action: GlobalAction) => {
  console.log('Global State:', { oldState: state, type: action.type });
  switch (action.type) {
    case types.ADD_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
