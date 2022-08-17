import React, { useState } from 'react'
import vacunas from '../img/vacunas.jpg'
import esteticaCanina from '../img/estetica_canina.jpg'
import atencion from '../img/atencion.jpg'

const ServiciosMedicos = () => {

  const servicios = ["Vacunas", "Estetica Canina", "Consulta de Domingo a Domingo"];
  const [miServicio, setMiServicio] = useState('')
  const ServiciosImagenes = ({ src }) => {
    return <img src={src} alt="" style={{ width: '250px', height: '250px' }} />;
  };

  return (
    <>
      <div className='row w-100 text-center'>
        <div className='col mb-3 col-12 text-center'>
          <h2>Servicios Medicos</h2>
          <br />
        </div>
        <div className='btn-grup' role="grup" aria-label='Basic'>
          {
            servicios.map(servicio => (
              <button
                type='button'
                key={servicio}
                className={"btn btn-light border-dark"}
                onClick={() => setMiServicio(servicio)}
              >
                {servicio.toLocaleUpperCase()}
              </button>
            ))
          }
        </div>

        <div className='col text-center'>
          <p>{miServicio}</p>
          <p>
            {miServicio === 'Vacunas' && (<ServiciosImagenes src={vacunas} />)}
            {miServicio === 'Estetica Canina' && (<ServiciosImagenes src={esteticaCanina} />)}
            {miServicio === 'Consulta de Domingo a Domingo' && (<ServiciosImagenes src={atencion} />)}
          </p>
        </div>

      </div>
    </>
  )
}

export default ServiciosMedicos