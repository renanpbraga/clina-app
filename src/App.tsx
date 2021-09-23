import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { UserProvider } from './context/useContext';
import Login from './components/login/Login';
import Rooms from './components/rooms/Rooms';
import Reservations from './components/reservations/Reservations';

const App: React.FC = () => {

  return (
    <UserProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/rooms/:id" component={ Reservations } />
          <Route exact path="/" component={ Login }/>
          <Route path="/rooms" component={ Rooms }/>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App;