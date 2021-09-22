import { createContext, ReactNode, useContext, useState } from 'react';
import clinica1 from '../images/clinica1.jpg';
import clinica2 from '../images/clinica2.jpg';
import clinica3 from '../images/clinica3.jpg';
import clinica4 from '../images/clinica4.jpg';

interface ProviderProps {
  children: ReactNode;
}

interface Clinica{
  id: number;
  nome: string;
  endereco: string;
  preco: number;
  img: any;
}

interface ContextData {
  mockedClinicas: Clinica[];
  cadastraClinica: (clinica:Clinica) => void;
}

export const ContextClinica = createContext<ContextData>({} as ContextData)

export const UserProvider = ({ children }:ProviderProps) => {

  const [cadClinica, setCadClinica] = useState<Clinica[]>([]);

  const mockedClinicas = [
    {
    id: 1,
    nome: 'Nome do consultório - Sala 01',
    endereco: 'Bela Vista, SP',
    preco: 80,
    img: clinica1,
    },
    {
      id: 2,
      nome: 'Nome do consultório - Sala 02',
      endereco: 'Bela Vista, SP',
      preco: 85,
      img: clinica2,
    },
    {
      id: 3,
      nome: 'Nome do consultório - Sala 03',
      endereco: 'Bela Vista, SP',
      preco: 90,
      img: clinica3,
    },
    {
      id: 4,
      nome: 'Nome do consultório - Sala 04',
      endereco: 'Bela Vista, SP',
      preco: 95,
      img: clinica4,
    },
  ]

  const cadastraClinica = (clinica:Clinica) => {
    setCadClinica([...cadClinica, clinica])
  }

  return (
    <ContextClinica.Provider value={{ mockedClinicas, cadastraClinica }}>{children}</ContextClinica.Provider>
  );
}

export const useUser = () => {
  const context = useContext(ContextClinica)
  return context;
}
