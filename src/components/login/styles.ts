import styled from 'styled-components';
import visibilityOn from '../../images/visibility-on.svg';

export const Container = styled.main`
  background-color: #fafafa;
  display: flex;
  font-family: poppins;
  height: 100vh;
  max-width: 1fr;
  section{
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 8px #cccccc;
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
      height: 35px;
      margin-bottom: 6px;
      padding-left: 10px;
      width: 100%;
      &.password {
        background-image: url(${visibilityOn});
        background-position: bottom 5px right 10px;
        background-repeat: no-repeat;
        background-size: 20px;
        padding-right: 10px;
      }
    }
  }

  button {
    background-color: #7A35FF;
    border: 0;
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
    width: 200px;
  }
`
