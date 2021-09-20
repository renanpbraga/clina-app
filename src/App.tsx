import React from 'react';
import Login from './components/Login';

function App() {
  // const idade = 20;
  const nome = 'Renan';
  const handleChange = () => {
    console.log('OLÁ MUNDO!');
  }
  return (
    <div>
      <Login />  
    </div>
  )
}

export default App;