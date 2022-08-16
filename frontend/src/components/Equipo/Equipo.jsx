import React from 'react'
import './Equipo.css'
import Tarjeta from '../EdeTrabajo/Tarjeta'
import Modal from '../Modals/Modal'
import { UseModal } from '../Modals/useModal'
const Equipo = () => {
  const [isOpen1, openModal1, closeModal1] = UseModal(false)
  const [isOpen2, openModal2, closeModal2] = UseModal(false)
  const [isOpen3, openModal3, closeModal3] = UseModal(false)
  return (
    <>
      <div className="contenedor-equipo">
        <Tarjeta
          darClick={openModal1}
          imagen='https://www.dogtorscat.com/wp-content/uploads/2019/09/foto-dsk-Pablo.png'
          nombre='Cristopher Solano'
          cargo='Doctor en Medicina Veterinaria y Zootecnia'
        />

        <Tarjeta
          darClick={openModal2}
          imagen='https://www.dogtorscat.com/wp-content/uploads/2019/09/foto_dsk_Carla_Rengel.png'
          nombre='Edith López '
          cargo='Doctora en Medicina Veterinaria y Zootecnia'
        />

        <Tarjeta
          darClick={openModal3}
          imagen='https://www.dogtorscat.com/wp-content/uploads/2019/09/foto_dsk_Esteban_Mier.png'

          nombre='XXXXX '
          cargo='Doctor en Medicina Veterinaria y Zootecnia'
        />
      </div>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <img src='https://www.dogtorscat.com/wp-content/uploads/2019/09/foto-dsk-Pablo.png' />
        <h3>'Cristopher Solano'</h3>
        <p>«Siempre observé que las mascotas transmiten una profunda amistad.
          Hoy puedo decir que atravieso una de las mejores aventuras profesionales».
        </p>
        <h4><strong>Certificaciones</strong></h4>
        <p>Universidad...</p>
        <h4> <strong>Ocupación:</strong></h4>
        <p>Medicina Interna.</p>
      </Modal>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <img src='https://www.dogtorscat.com/wp-content/uploads/2019/09/foto_dsk_Carla_Rengel.png' />
        <h3>'Edith López'</h3>
        <p>«“Me hice veterinaria porque en esta profesión puedo ayudar a seres que no tienen voz y que solo dan amor”</p>
        <h4><strong>Certificaciones</strong></h4>
        <p>Universidad...</p>
        <h4> <strong>Ocupación:</strong></h4>
        <p>Medicina Interna.</p>
      </Modal>
      <Modal isOpen={isOpen3} closeModal={closeModal3}>
      <img src='https://www.dogtorscat.com/wp-content/uploads/2019/09/foto_dsk_Esteban_Mier.png' />
        <h3>'XXXXX '</h3>
        <p>««Desde pequeño me gustaron los animales y la medicina»</p>
        <h4><strong>Certificaciones</strong></h4>
        <p>Universidad...</p>
        <h4> <strong>Ocupación:</strong></h4>
        <p>Medicina Interna.</p>
      </Modal>
    </>

  )
}

export default Equipo