import React from 'react'

export const TodoItem: React.FunctionComponent = () => {

  return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" value={value} onChange={this.updateValue} />
      <button type="submit">Add todo !</button>
    </form>
  )
}
