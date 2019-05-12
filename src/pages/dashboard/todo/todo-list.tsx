import React, { useContext } from 'react'
import { DashboardContext } from '../context/dashboard-context'

export const TodoList: React.FC = () => {

  const { actions } = useContext<any>(DashboardContext);

  const todos = actions.getTodos()

  const deleteTodo = (id: number) => {

  }

  return (
    <ul>
      {
        todos.map((todo: string, index: number) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))
      }
    </ul>
  )
}
