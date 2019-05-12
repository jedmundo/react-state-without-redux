
export enum GlobalActionType {
  SET_USERNAME = 'SET_USERNAME',
}

export interface AddUsernameAction {
  type: GlobalActionType.SET_USERNAME
  payload: string
}

export type GlobalAction =
  | AddUsernameAction
