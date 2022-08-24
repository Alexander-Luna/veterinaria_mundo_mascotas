import React from 'react'
import './Servicio.css'

function Servicio(props) {
  return (
    <div className='contenedor-servicio'>
      <img
        className='imagen-servicio'
        src={require(`../img/${props.imagen}.jpg`)}
        alt='Servicio'
      />
      <div className='contenedor-texto-servicios'>
        <p className='texto-servico'>{props.descripcion}</p>
      </div>

    </div>
  )
}

export default Servicio