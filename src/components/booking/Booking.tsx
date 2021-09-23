import React from 'react'
import { useParams } from 'react-router';
import Navbar from '../navbar/Navbar';
import { useClinica,Clinica } from '../../context/useContext';

interface IRoom {
  id: string | undefined;
}

const Booking:React.FC = () => {
  const paramObj:IRoom = useParams();

  const {mockedClinicas} = useClinica()
  const room:Clinica | undefined = mockedClinicas.find((clinica) => clinica.id === Number(paramObj.id));
  console.log(room);

  return (
    <main>
      <Navbar />
        {room &&
          <section>
            <p>{room.nome}</p>
            <p>{room.endereco}</p>
            <p>{room.preco}</p>
            <img src={room.img} alt="" />
          </section>
        }
    </main>
  )
}

export default Booking;
