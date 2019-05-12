import React from 'react'
import { Routes } from './routes/routes'
import { GlobalProvider } from './global-context/global-context';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
