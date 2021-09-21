import React, { useState } from 'react';
import logo from '../../images/logo-clina.png';
import { Container } from './styles';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/useContext';

function Login() {
  let history = useHistory();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);

  const mockedUser = {
    email: 'renan@clina.care',
    password: '123456',
  };

  const handleLogin = () => {
    if( user === mockedUser.email && password === mockedUser.password) {
      history.push('/reservations');
    } else {
      setMessage(true);
    }
  }

  return (
    <Container>
      <section>
        <img src={logo} alt="Logotipo da Clina" className="index-logo" />
        <h3>Bem-vindo de volta!</h3>
        <p className={!message ? "esconder" : "mostrar"}>Usuário ou senha inválidos.</p>
        <label htmlFor="email-input">
          E-mail:
          <br/>
          <input
            type="text"
            id="email-input"
            onChange={(event) => setUser(event.target.value)}
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <br/>
          <input
            type="password"
            id="password-input"
            onChange={(event) => setPassword(event.target.value)}
            className="password"
          />
        </label>
        <button type="submit" onClick={handleLogin}>Entrar</button>
        <p>Esqueci minha senha</p>
      </section>
    </Container>
  )
}

export default Login;
