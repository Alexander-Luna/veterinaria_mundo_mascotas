import React, { useState } from 'react'
import "./Ecard.css"
function Ecard(props) {
  return (
    <>
      <div className='Card'>
        <div className='upper-container'>
          <div className='image-container'>
            <img src={props.imagen} alt="" height="100px" width="100px" />
          </div>
        </div>
        <div className='lower-container'>
          <h3>{props.nombre}</h3>
          <h4>{props.cargo}</h4>
          <p>{props.informacion}</p>
          <button>Ver Perfil</button>
        </div>
      </div>
    </>


  )
}

export default Ecard