import React, { useContext } from 'react'
import { GlobalContext } from '../../store/global-context';

const Login: React.FC = () => {

  const { actions } = useContext<any>(GlobalContext);
  const name = 'Alexander Dumas'

  const updateUsername = () => {
    actions.setUsername(name)
  }

  return (
    <div>
      <p>Im going to change the global state of the application (see console logs)</p>
      <button onClick={() => updateUsername()}>Login with {name}</button>
    </div>
  )
}

export default Login
