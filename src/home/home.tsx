import React, { useState } from 'react'

const Home: React.FC = () => {

  const [counter, setCounter] = useState<number>(0)

  return (
    <div>
      <p>Im just a simple page and I dont care about global state, just my own</p>
      <p>Current counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add Counter</button>
    </div>
  )
}

export default Home
