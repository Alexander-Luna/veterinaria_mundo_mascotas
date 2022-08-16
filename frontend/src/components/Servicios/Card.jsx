import React from 'react'
import '../Servicios/Card.css'
function Card(props) {

  return (
    <div className='contenedor-principal'>
      <div className='contenedor-card'>
        <div className='codenedor-imagen'>
          <img src={props.imagen} />
        </div>
        <div className='contenedor-informacion'>
          <div className='contenedor-titulo'>
            <h3>{props.nombre}</h3>
          </div>
          <div className='contenedor-descripcion'>
            <p>{props.cargo}</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Card