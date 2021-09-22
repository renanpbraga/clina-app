import styled from 'styled-components';

export const Container = styled.main`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  font-family: poppins;
  height: 100vh;
  max-width: 1fr;
  .cadastre-se {
    margin: -10px auto auto auto;
    text-align: center;
    width: 30%;
  }
  section{
    box-shadow: 0px 4px 6px #00000014;
    border: 1px solid #CFCFCF;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 40px 20px;
    min-width: 300px;
    width: 30%;
  }

  h3 {
    margin:32px 0 8px 0;
  }

  label {
    font-family: poppins;
    input {
      border: solid 1px #CFCFCF;
      border-radius: 4px;
      font-size: 1em;
      height: 35px;
      margin-bottom: 6px;
      min-width: 300px;
      padding-left: 10px;
      width: 100%;
    }
  }
  
  .password-field{
    display:flex;
    img {
      margin-left: -30px;
      margin-top: -5px;
    }
  }

  button {
    background-color: #7A35FF;
    border: 0;
    border-radius: 4px;
    box-shadow: 0px 4px 8px #0000001F;
    color: #ffffff;
    font-weight: bold;
    height: 35px;
    margin-top: 16px;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  p {
    color: #212E89;
    margin-top: 36px;
    text-align: center;
    text-decoration: underline;
    &.mostrar {
      color: #ff0000;
      font-size: 0.8em;
      margin: 5px 0;
      text-align: left;
      text-decoration: none;
    }
    &.esconder {
      display: none;
    }
  }

  .index-logo {
    width: 160px;
  }
  `
