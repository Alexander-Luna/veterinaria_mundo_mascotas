import React from 'react'
import Modal from './Modal'
import { UseModal } from './useModal'

export const Modals = () => {
  const [isOpen1, openModal1, closeModal1] = UseModal(false)
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <h3>Modal1</h3>
        <p>Hola este es el contenido de mi modal Uno</p>
        <img src='https://placeimg.com/400/400/animals' alt='Animals' />
      </Modal>
    </div>
  )
}
