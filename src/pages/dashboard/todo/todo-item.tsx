import React, { useContext, FormEvent, useState } from 'react'

import { DashboardContext } from '../context/dashboard-context'
import { MainTitle } from '../../../app.styles'

export const TodoItem: React.FunctionComponent = () => {

  const { actions } = useContext(DashboardContext);
  const [text, setText] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim()) {
      return;
    }

    actions.addTodo(text)
    setText('')
  }

  return (
    <>
      <MainTitle> Sync request </MainTitle>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.currentTarget.value)} />
        <button type="submit">Add todo !</button>
      </form>
    </>
  )
}
