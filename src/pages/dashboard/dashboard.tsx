import React from 'react'
import { TodoItem } from './todo/todo-item';
import { TodoList } from './todo/todo-list'
import { GithubSearch } from './github/github-search'
import { GithubRepos } from './github/repos'
import { DashboardProvider } from './context/dashboard-context';

const Dashboard: React.FC = () => (
    <DashboardProvider>
      <TodoItem />
      <TodoList />
      <GithubSearch />
      <GithubRepos />
    </DashboardProvider>
  )

export default Dashboard
