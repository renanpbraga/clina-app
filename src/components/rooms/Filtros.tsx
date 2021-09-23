import React from 'react'

const Filtros: React.FC = () => {
  return (
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
  )
}

export default Filtros;
