const initialState = {
  techList: ["Get groceries", "Run the marathon"],
  isLoading: false,
  notFound: false,
};

const types = {
  SET_TECH_LIST: "SET_TECH_LIST",
  ADD_TO_TECH_LIST: "ADD_TO_TECH_LIST",
  REMOVE_FROM_TECH_LIST: "REMOVE_FROM_TECH_LIST",
  SEARCH_GITHUB: "SEARCH_GITHUB",
  SEARCH_GITHUB_SUCCESS: "SEARCH_GITHUB_SUCCESS",
  SEARCH_GITHUB_NOT_FOUND: "SEARCH_GITHUB_FAIL",
};

const reducer = (state = initialState, action: any) => {
  console.log('Local State', { oldState: state, type: action.type, payload: action.payload });
  switch (action.type) {
    case types.SET_TECH_LIST:
      return {
        ...state,
        techList: action.payload
      };
    case types.ADD_TO_TECH_LIST:
      return {
        ...state,
        techList: [...state.techList, action.payload]
      };
    case types.REMOVE_FROM_TECH_LIST:
      return {
        ...state,
        techList: state.techList.filter(tech => tech !== action.payload)
      };
    case types.SEARCH_GITHUB:
      return {
        ...state,
        isLoading: true
      };
    case types.SEARCH_GITHUB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        repos: action.payload.repos
      };
    case types.SEARCH_GITHUB_NOT_FOUND:
      return {
        ...state,
        isLoading: false,
        notFound: true,
      };
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
