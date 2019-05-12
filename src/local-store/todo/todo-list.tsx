import React, { useContext } from 'react'
import { StoreContext } from '../../context/store-context';

export const TodoList: React.FC = () => {

  const { actions } = useContext<any>(StoreContext);

  const todos = actions.getTodos()

  const deleteTodo = (id: string) => {

  }

  return (
    <ul>
      {
        todos.map((todo: any) => (
          <li key={todo}>
            {todo}
            <button onClick={(e) => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))
      }
    </ul>
  )
}
