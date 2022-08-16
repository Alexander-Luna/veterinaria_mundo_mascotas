import React from 'react'
import '../Servicios/EnvioInfo.css'
import Formulario from './Formulario'

const EnvioInfo = () => {
  return (
    <div className='contenedor-infromacion'>
      <div className='contenedor-titulo'>
        <h2>Déjanos ayudarte</h2>
        <p>
          Envíanos un mensaje por este medio.
          Estaremos gustosos de atenderte
        </p>
      </div>
      <div className='contenedor-envio-formulario'>
        <Formulario />
      </div>
    </div>
  )
}

export default EnvioInfo;