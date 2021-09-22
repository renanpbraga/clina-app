import React from 'react';
import Navbar from '../navbar/Navbar';
// import Calendario from './Calendario';
import { useUser } from '../../context/useContext';
import { MainContainer, MapClinicas } from './styles';
import '@natscale/react-calendar/dist/main.css';

const Rooms: React.FC = () => {

  const {mockedClinicas} = useUser()
  return (
    <MainContainer>
        <nav>
          <Navbar />
        </nav>
      <section className="main-section">
        <section className="local">
          <h3>Nossas salas disponíveis agora.</h3>
          <p>Todas as nossas salas estã localizadas em São Paulo - Bela Vista, rua Itapeva, 490 Sala 68 - CEP: 01332-080</p>
        </section>
        <section className="filters">
          {/* <Calendario /> */}
          <label htmlFor="calendario">
            Precisa para quais dias?
            <select name="calendario" id="calendario">
              <option value="calend">calend</option>
            </select>
          </label>
          <label htmlFor="periodo">
            Período do dia
            <select name="periodo" id="periodo">
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
            </select>
          </label>
        </section>
        <section>
          <span>Encontramos {`${mockedClinicas.length}`} salas disponíveis</span>
          <MapClinicas>
            {mockedClinicas.map((clinica:any) =>
              <article>
                <div className="description">
                  <div>
                    <img src={clinica.img} width="272" alt={`Foto do ${clinica.nome}`}/>
                  </div>
                  <div className="consultorio">
                    <h3>{clinica.nome}</h3>
                    <p>{clinica.endereco}</p>
                  </div>
                  <div className="preco">
                    <p>A partir de</p>
                    <span>R${clinica.preco}/h</span>
                  </div>
                </div>
                <aside>
                  <button>Reservar</button>
                </aside>
              </article>
            )}
          </MapClinicas>
      </section>
      <p>Paginação</p>
      </section>
    </MainContainer>
  )
}

export default Rooms;
