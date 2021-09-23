import React from 'react'
import { MapClinicas } from './styles';
import { useClinica, Clinica } from '../../context/useContext';
import { useHistory } from 'react-router-dom';

export interface RoomParams {
  id: string;
  nome: string;
  endereco: string;
  preco: number;
  img: string;
}


const ListaClinicas: React.FC = () => {
  
  let  history = useHistory();
  
  const {mockedClinicas} = useClinica()

  const handleRedirect = (clinica:Clinica) => {
    history.push(`/rooms/${clinica.id}`)
  }

  return (
        <MapClinicas>
          <span id="salas-disponiveis">
            Encontramos {`${mockedClinicas.length}`} salas disponíveis
          </span>
            {mockedClinicas.map((clinica) => 
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
                    <span><strong>R${clinica.preco}</strong>/h</span>
                  </div>
                </div>
                <aside>
                    <button type="button" onClick={() => handleRedirect(clinica)}>Reservar</button>
                </aside>
              </article>
            )}
          </MapClinicas>
  )
}

export default ListaClinicas;
