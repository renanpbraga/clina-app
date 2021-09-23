import styled from 'styled-components';

export const Nav = styled.nav`
  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 0 auto;
  width: 100%;
  #navbar-container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 85%;
  }
  #logo {
    height: 40px;
  }
  #user-menu{
    display: flex;
    align-items: center;
    #user-button {
      background-color: #EEEEEE;
      border-radius: 100px;
      width: 36px;
      height: 36px;
    }
  #arrow-icon {
    margin-left: 8px;
  }  
  }
`