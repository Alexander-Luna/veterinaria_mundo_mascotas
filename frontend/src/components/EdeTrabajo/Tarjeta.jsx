import { React, useState } from 'react'
import './Tarjeta.css'
import { UseModal } from '../Modals/useModal'
import Modal from '../Modals/Modal'
function Tarjeta(props) {
  const [isOpen1, openModal, closeModal1] = UseModal(false)
  const [isOpen2, closeModal2] = UseModal(false)
  return (
    <>
      <div className='contenedor-tarjeta'>
        <div className='codenedor-imagen'>
          <img src={props.imagen} />
        </div>
        <div className='contenedor-informacion'>
          <div className='contenedor-nombre'>
            <h3>{props.nombre}</h3>
          </div>
          <div className='contenedor-cargo'>
            <p>{props.cargo}</p>
          </div>
        </div>
        <button onClick={props.darClick}>Ver Perfil</button>
      </div>
    </>




  )
}

export default Tarjeta