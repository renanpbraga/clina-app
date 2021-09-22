import React, { useState } from 'react';
import user from '../../images/user.png'
import logo from '../../images/logo-clina.png';
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
      <div>
        <img src={logo} alt="Logotipo da Clina" className="logo" />
        <img className="user-button"src={user} alt="Menu do usuário" onClick={handleUserMenu}/>
      </div>      
    </Nav>
  )
}

export default Navbar
