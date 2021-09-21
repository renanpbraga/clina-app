import React from 'react';
import Login from './components/Login';
import { GlobalStyle } from './styles/global';
import { UserProvider } from './context/useContext';

function App() {

  return (
    <UserProvider>
      <GlobalStyle />
      <Login />  
    </UserProvider>
  )
}

export default App;