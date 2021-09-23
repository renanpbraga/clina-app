import React from 'react'
import { FooterContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>
        <p>© 2021 Clina. Todos os direitos reservados</p>
      </div>
      <div>
        <span>Termos de uso</span>
        <span>Políticas de privacidade</span>
      </div>
    </FooterContainer>
  )
}

export default Footer;
