import React from 'react'
import logo from '../images/logo-clina.png'

function Login() {
  return (
    <main>
      <section>
        <input type="image" src={logo} alt="Logotipo da Clina" />
        <h3>Bem-vindo de volta!</h3>
        <label htmlFor="email-input">
          E-mail:
          <input type="text" id="email-input" />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input type="text" id="password-input" />
        </label>
      </section>
    </main>
  )
}

export default Login;
