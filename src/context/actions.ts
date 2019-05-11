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

  return {
    addTechIfNotInList,
    getTodos
  };
};
