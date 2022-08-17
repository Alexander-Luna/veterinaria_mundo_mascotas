import React, { useState } from 'react'
import urgencias from '../img/urgecias.jpg'
import consulta from '../img/conculta_externa.jpg'
import cirugia from '../img/cirugia.jpg'
import hospitalizacion from '../img/hospitalizacion.jpg'
import farmacia from '../img/farmacia.jpg'
import oftalmologia from '../img/oftalmologia.jpg'
import odontologia from '../img/odontologia.jpg'
import dermatologia from '../img/odontologia.jpg'

import './ServiciosMedicos.css'
const ServiciosMedicos = () => {

  const servicios = [
    "Urgencias",
    "Consulta externa",
    "Cirugía general y ortopedia",
    "Hospitalización",
    "Farmacia Veterinaria",
    "Oftalmología",
    "Odontología",
    "Dermatología"];



  const [miServicio, setMiServicio] = useState('')
  const [miInformacion, setInfromacion] = useState('')
  const ServiciosImagenes = ({ src }) => {
    return <img src={src} alt="" style={{ width: '250px', height: '250px' }} />;
  };

  const ServicioIformacion = (props) => {
    return (
      <div>
        {/* <img src={require(`../img/${props.imagen}.jpg`)}/> */}
        <p>{props.info}</p>
      </div>

    )
  }

  return (
    <>
      <div className='contenedot-info-ser'>
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
                // className={"btn btn-light border-dark"}
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
            {miServicio === 'Urgencias' && (<ServiciosImagenes src={urgencias} />, <ServicioIformacion info='El servicio de urgencias de nuestro hospital brinda atención inmediata a los pacientes que se encuentran en estados críticos o con enfermedades agudas que requieren hospitalización y tratamiento inmediato. En caso de requerir procedimientos especiales como cirugías de urgencia, un equipo de cirujanos y anestesistas está a disposición las 24 horas del día, para brindar la mejor atención a la mascota.' />)}
            {miServicio === 'Consulta externa' && (<ServiciosImagenes src={consulta} />) && (<ServicioIformacion info='hoooooooooooo' />)}
            {miServicio === 'Cirugía general y ortopedia' && (<ServiciosImagenes src={cirugia} />)}
            {miServicio === 'Hospitalización' && (<ServiciosImagenes src={hospitalizacion} />)}
            {miServicio === 'Farmacia Veterinaria' && (<ServiciosImagenes src={farmacia} />)}
            {miServicio === 'Oftalmología' && (<ServiciosImagenes src={oftalmologia} />)}
            {miServicio === 'Odontología' && (<ServiciosImagenes src={odontologia} />)}
            {miServicio === 'Dermatología' && (<ServiciosImagenes src={dermatologia} />)}
          </p>
        </div>

      </div>
    </>
  )
}

export default ServiciosMedicos