import React, { useState } from 'react';
import logo from '../../images/logo-clina.png';
import visibilityOn from '../../images/visibility-on.svg';
import visibilityOff from '../../images/visibility-off.svg'
import { Container } from './styles';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  let history = useHistory();
  console.log(history);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState("password");
  const [olho, setOlho] = useState(true);

  const mockedUser = {
    email: 'renan@clina.care',
    password: '123456',
  };

  const validEmail = mockedUser.email.match(/[a-z]+@[a-z]+.com/g);
  
  const handleLogin = () => {
    if( user === mockedUser.email && validEmail && password === mockedUser.password) {
      history.push('/rooms');
    } else {
      setMessage(true);
    }
  }

  const handlePasswordVisibility = () => {
    if(passwordVisibility === "password"){
      setPasswordVisibility("text");
      setOlho(false);
    }
    if(passwordVisibility === "text"){
      setPasswordVisibility("password");
      setOlho(true);
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
            placeholder="Digite seu e-mail"
          />
        </label>
          <label htmlFor="password-input">
            Senha:
            <br/>
            <div className="password-field">
            <input
              type={passwordVisibility}
              id="password-input"
              onChange={(event) => setPassword(event.target.value)}
              />
            <img
              src={olho ? visibilityOn : visibilityOff}
              onClick={handlePasswordVisibility}
              className="ver-senha"
              alt="Botão de mostrar senha"
            />
            </div>
          </label>
        <button type="submit" onClick={handleLogin}>Entrar</button>
        <p>Esqueci minha senha</p>
      </section>
      <div className="cadastre-se">
        <span>Novo na plataforma? <a href="#">Cadastre-se</a></span>
      </div>
    </Container>
  )
}

export default Login;
