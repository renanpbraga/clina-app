import React from 'react';
import Navbar from '../navbar/Navbar';
// import Calendario from './Calendario';
import { MainContainer } from './styles';
import '@natscale/react-calendar/dist/main.css';
import Footer from '../footer/Footer';
import pin from '../../images/pin.svg'
import ListaClinicas from './ListaClinicas';
import Filtros from './Filtros';
import Pagination from '../pagination/Pagination';

const Rooms: React.FC = () => {

  return (
    <MainContainer>
        <nav>
          <Navbar />
        </nav>
      <section className="main-section">
        <section className="local">
          <p>Nossas salas disponíveis agora.</p>
          <div id="texto-local">
            <img src={pin} alt="" height="16"/>
            <span> Todas as nossas salas estã localizadas em São Paulo - 
              Bela Vista, rua Itapeva, 490 Sala 68 - CEP: 01332-080
            </span>
          </div>
          <Filtros />
        </section>
        <section>
          <ListaClinicas />  
        </section>
      <Pagination />
      <Footer />
      </section>
    </MainContainer>
  )
}

export default Rooms;
