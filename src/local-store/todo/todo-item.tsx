import React, { useContext, FormEvent, useState } from 'react'
import { StoreContext } from '../../context/store-context';
import { MainTitle } from '../../app.styles'

export const TodoItem: React.FunctionComponent = () => {

  const { actions } = useContext<any>(StoreContext);
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<any>) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }

    actions.addTechIfNotInList(text)
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
