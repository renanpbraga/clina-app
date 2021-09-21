import React, { useState } from 'react';
import { useUser } from '../context/useContext';
import logo from '../images/logo-clina.png'
// import { api } from '../services/api';
import { Container } from './styles';

function Login() {
  // const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const { user } = useUser();
  console.log(user);
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   setUser()
  // }

  return (
    <Container>
      <section>
        <input type="image" src={logo} alt="Logotipo da Clina" />
        <h3>Bem-vindo de volta!</h3>
        <label htmlFor="email-input">
          E-mail:
          <input
            type="text"
            id="email-input"
            // onChange={(event) => setUser(event.target.value)}
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="text"
            id="password-input"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Entrar</button>
      </section>
    </Container>
  )
}

export default Login;
