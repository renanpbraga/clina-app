import React, { useState } from 'react';
import user from '../../images/user.png'
import logo from '../../images/logo-clina.png';
import iconArrowDown from '../../images/iconArrowDown.svg'
import { Nav } from './styles';

const Navbar: React.FC = () =>{

  const [userMenu, setUserMenu] = useState(false)

  const handleUserMenu = () => {
    if (userMenu === false){
      setUserMenu(true);
    }
    if (userMenu === true) {
      setUserMenu(false);
    }
  }

  return (
    <Nav className="Navbar">
      <div id="navbar-container">
        <div>
          <img src={logo} id="logo" alt="Logotipo da Clina" />
        </div>
        <div id="user-menu">  
          <img src={user} id="user-button" alt="Menu do usuário" onClick={handleUserMenu}/>
          <img src={iconArrowDown} id="arrow-icon" alt="" className="logo" width="14"/>
        </div>      
      </div>
    </Nav>
  )
}

export default Navbar
