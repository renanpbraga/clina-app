import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface ProviderProps {
  children: ReactNode;
}

interface User{
  id: number,
  name: string,
  email: string,
  password: string, 
}

interface ContextData {
  user: User[]
}

export const ContextUser = createContext<ContextData>({} as ContextData)

export const UserProvider = ({ children }:ProviderProps) => {
  const [user, setUser] = useState<User[]>([]);
  useEffect(() => {
    api.get('users').then(response => setUser(response.data.users))
  }, [])
  return (
    <ContextUser.Provider value={{ user }}>{children}</ContextUser.Provider>
  );
}

export const useUser = () => {
  const context = useContext(ContextUser)
  return context;
}