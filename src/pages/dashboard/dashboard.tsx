import React from 'react'
import { TodoItem } from './todo/todo-item';
import { TodoList } from './todo/todo-list'
import { GithubSearch } from './github/github-search'
import { GithubRepos } from './github/repos'
import { DashboardProvider } from './context/dashboard-context';

const Dashboard: React.FC = () => (
  <DashboardProvider>
    <div>
      <p>These todos and github search change the dashboard state only (see console logs)</p>
      <TodoItem />
      <TodoList />
      <GithubSearch />
      <GithubRepos />
    </div>
  </DashboardProvider>
)

export default Dashboard
