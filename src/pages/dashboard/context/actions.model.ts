import { GithubRepository } from '../github/repos.model'

export enum DashboardActionType {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  SEARCH_GITHUB = 'SEARCH_GITHUB',
  SEARCH_GITHUB_SUCCESS = 'SEARCH_GITHUB_SUCCESS',
  SEARCH_GITHUB_NOT_FOUND = 'SEARCH_GITHUB_NOT_FOUND',
}

export interface CreateTodoAction {
  type: DashboardActionType.ADD_TODO
  payload: string
}

export interface DeleteTodoAction {
  type: DashboardActionType.REMOVE_TODO
  payload: string
}

export interface SearchGithubAction { type: DashboardActionType.SEARCH_GITHUB }

export interface SearchGithubSuccessAction {
  type: DashboardActionType.SEARCH_GITHUB_SUCCESS
  payload: { repos: GithubRepository[] }
}

export interface SearchGithubFailAction { type: DashboardActionType.SEARCH_GITHUB_NOT_FOUND }

export type DashboardAction =
  | CreateTodoAction
  | DeleteTodoAction
  | SearchGithubAction
  | SearchGithubSuccessAction
  | SearchGithubFailAction
