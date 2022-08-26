import React, { useState } from 'react'
import { FaDog } from "react-icons/fa";
import './SubMenup.css'
import ContenedorAdultos from './ProductosAdultos/ContenedorAdultos';
import ContenedorCachorros from './ProductosAdultos/ContenedorCachorros';

const SubMenuP = () => {
  const servicios = [
    "cachorros",
    "adultos",
    "senior",
  ];



  const [miServicio, setMiServicio] = useState('')
  const [miInformacion, setInfromacion] = useState('')
  const ServiciosImagenes = ({ src }) => {
    return <img src={src} alt="" style={{ width: '250px', height: '250px' }} />;
  };

  return (
    <>
      <div className='contenedot-info-ser'>
        <div className='col mb-4 col-12 text-center'>
        </div>
        <div className='btn-grup' role="grup" aria-label='Basic'>
          {
            servicios.map(servicio => (
              <button className='cont-boton'
                type='button'
                key={servicio}
                // className={"btn btn-light border-dark"}
                onClick={() => setMiServicio(servicio)}
              >
                <div className='con-icon'>
                  <FaDog />
                </div>

                {servicio.toLocaleUpperCase()}
              </button>
            ))
          }
        </div>

        <div className='col text-center'>
          <p>{miServicio}</p>
          <p>
            {miServicio === 'cachorros' && <ContenedorCachorros />}
            {miServicio === 'adultos' && <ContenedorAdultos />}
            {miServicio === 'senior'}
          </p>
        </div>

      </div>
    </>
  )
}

export default SubMenuP