import { DashboardAction, DashboardActionType } from './actions.model'

export interface DashboardState {
  todoList: string[]
  isLoading: boolean
  notFound: boolean
}

export const initialState: DashboardState = {
  todoList: [
    'Get groceries',
    'Run the marathon'
  ],
  isLoading: false,
  notFound: false,
};

export const reducer = (state = initialState, action: DashboardAction) => {
  console.log('Dashboard State', { oldState: state, action: action.type });
  switch (action.type) {
    case DashboardActionType.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    case DashboardActionType.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(tech => tech !== action.payload)
      };
    case DashboardActionType.SEARCH_GITHUB:
      return {
        ...state,
        isLoading: true
      };
    case DashboardActionType.SEARCH_GITHUB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        repos: action.payload.repos
      };
    case DashboardActionType.SEARCH_GITHUB_NOT_FOUND:
      return {
        ...state,
        isLoading: false,
        notFound: true,
      };
    default:
      throw new Error('Unexpected action');
  }
};
