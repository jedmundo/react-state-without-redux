import axios from 'axios'

import { DashboardState } from './reducers'
import { DashboardActionType, DashboardAction } from './actions.model'

export const useActions = (state: DashboardState, dispatch: React.Dispatch<DashboardAction>) => {

  const addTodo = (todo: string): void => {
    const techIndex = state.todoList.indexOf(todo);
    if (techIndex !== -1) {
      alert('Todo is defined in list');
    } else {
      dispatch({ type: DashboardActionType.ADD_TODO, payload: todo });
    }
  }

  const getTodos = (): string[] => {
    return state.todoList
  }

  const searchGithub = async (username: string) => {
    dispatch({ type: DashboardActionType.SEARCH_GITHUB });
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      const repos = response.data;
      // const isReposEmpty = repos.length == 0;
      // const status = isReposEmpty ? 'EMPTY' : 'SUCCESS';
      dispatch({ type: DashboardActionType.SEARCH_GITHUB_SUCCESS, payload: { repos } });
    } catch (error) {
      // const isError404 = error.response && error.response.status === 404;
      // const status = isError404 ? 'NOT_FOUND' : 'ERROR';
      dispatch({ type: DashboardActionType.SEARCH_GITHUB_NOT_FOUND })
    }
  }

  return {
    addTodo,
    getTodos,
    searchGithub,
  };
};
