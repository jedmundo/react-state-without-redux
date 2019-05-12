import axios from "axios";

import { types } from './reducers'

export const useActions = (state: any, dispatch: any) => {

  function addTechIfNotInList(newTech: any) {
    const techIndex = state.techList.indexOf(newTech);
    if (techIndex !== -1) {
      alert("Tech is defined in list");
    } else {
      dispatch({ type: types.ADD_TO_TECH_LIST, payload: newTech });
    }
  }

  function getTodos(): string[] {
    return state.techList
  }

  async function searchGithub(username: string) {
    dispatch({ type: types.SEARCH_GITHUB });
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      const repos = response.data;
      // const isReposEmpty = repos.length == 0;
      // const status = isReposEmpty ? "EMPTY" : "SUCCESS";
      dispatch({ type: types.SEARCH_GITHUB_SUCCESS, payload: { repos } });
    } catch (error) {
      // const isError404 = error.response && error.response.status === 404;
      // const status = isError404 ? "NOT_FOUND" : "ERROR";
      dispatch({ type: types.SEARCH_GITHUB_NOT_FOUND })
    }
  }

  return {
    addTechIfNotInList,
    getTodos,
    searchGithub,
  };
};
