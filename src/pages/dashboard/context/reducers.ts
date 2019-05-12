import { DashboardAction, DashboardActionType } from './actions.model'
import { GithubRepository } from '../github/repos.model'

export interface DashboardState {
  todoList: string[]
  isLoading: boolean
  notFound: boolean
  repos: GithubRepository[]
}

export const initialState: DashboardState = {
  todoList: [
    'Get groceries',
    'Run the marathon'
  ],
  isLoading: false,
  notFound: false,
  repos: [],
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
        repos: []
      };
    default:
      throw new Error('Unexpected action');
  }
};
