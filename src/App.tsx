import React from 'react';
import { TodoItem } from './todo/todo-item'
import { TodoList } from './todo/todo-list'
import { GithubSearch } from './github/github-search'
import { GithubRepos } from './github/repos'

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoItem />
      <TodoList />
      <GithubSearch />
      <GithubRepos />
    </div>
  );
}

export default App;
