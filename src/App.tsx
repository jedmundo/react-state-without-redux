import React from 'react';
import { TodoItem } from './todo/todo-item'
import { TodoList } from './list/todo-list'

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoItem />
      <TodoList />
    </div>
  );
}

export default App;
