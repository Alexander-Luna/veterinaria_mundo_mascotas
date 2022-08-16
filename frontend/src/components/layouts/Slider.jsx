import React from 'react'
import images from '../../exports/images'
import '../../styles/Slider.css'
import { motion } from 'framer-motion'

const Slider = () => {
  return (
    <motion.div className='card-container'>
      <motion.div className='slider-container'>
        <motion.div className='slider' drag='x'
          dragConstraints={{ right: 0, left: -1450 }} >
          {images.map(image => (
            <motion.div className='item'>
              <img src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className='contenedor-texto'>
        <h4 className="contenedor-subtitulo">Cuidado especializado para cada mascota.</h4>
        <p className="texto-historia">
          Sabemos que cada mascota es única. Por esta razón, contamos con la experiencia y
          las instalaciones adecuadas para atender las necesidades específicas tanto de
          perros como de gatos. Queremos que todos nuestros pacientes se sientan como en casa.
        </p>
      </div>

    </motion.div>



  )
}

export default Slider