import React from 'react'
import { TodoItem } from './todo/todo-item';
import { TodoList } from './todo/todo-list'
import { GithubSearch } from './github/github-search'
import { GithubRepos } from './github/repos'
import { StoreProvider } from './context/store-context';

const LocalStore: React.FC = () => (
    <StoreProvider>
      <TodoItem />
      <TodoList />
      <GithubSearch />
      <GithubRepos />
    </StoreProvider>
  )

export default LocalStore
