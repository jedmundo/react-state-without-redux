import React from 'react'
import { Routes } from './routes/routes'
import { GlobalProvider } from './store/global-context';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
