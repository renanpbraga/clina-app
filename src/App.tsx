import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { UserProvider } from './context/useContext';
import Login from './components/login/Login';
import Reservations from './components/reservations/Reservations';

function App() {

  return (
    <UserProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/reservarions" component={ Reservations }/>
          <Route exact path="/" component={ Login }/>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App;