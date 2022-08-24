import React, { useState } from 'react'
import urgencias from '../img/urgecias.jpg'
import consulta from '../img/conculta_externa.jpg'
import cirugia from '../img/cirugia.jpg'
import hospitalizacion from '../img/hospitalizacion.jpg'
import farmacia from '../img/farmacia.jpg'
import oftalmologia from '../img/oftalmologia.jpg'
import odontologia from '../img/odontologia.jpg'
import dermatologia from '../img/dermatologia.jpg'
import Servicio from './Servicio'
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
            {miServicio === 'Urgencias' && (<ServiciosImagenes src={urgencias} />)
              && (<Servicio
                imagen="urgecias"
                descripcion="El servicio de urgencias de nuestro hospital brinda atención inmediata a los pacientes que se encuentran en estados críticos o con enfermedades agudas que requieren hospitalización y tratamiento inmediato. En caso de requerir procedimientos especiales como cirugías de urgencia, un equipo de cirujanos y anestesistas está a disposición las 24 horas del día, para brindar la mejor atención a la mascota.

            ¿Cuándo debo llevar a mi mascota a urgencias? 
            
            Te contamos algunas situaciones en dónde es mejor actuar de inmediato.
            1. Si tienes sospechas que ha ingerido algún producto tóxico como: uvas, pasas, chocolates, aspirinas, medicinas de humanos es mejor que acudas a nuestro hospital y podamos establecer la gravedad del caso.
            2. Cuando notes que tu animalito tiene dificultades para respirar y sientes que se ahoga, no lo dudes y acude de inmediato.
            "
              />)}
            {miServicio === 'Consulta externa' && (<ServiciosImagenes src={consulta} />)
              && (<Servicio
                imagen="conculta_externa"
                descripcion="Con el propósito de garantizar la salud y bienestar de nuestros pacientes, el hospital cuenta con atención en departamentos de interés como cardiología, dermatología, nefrourología, gastroenterología y medicina preventiva. Tanto perros como gatos pueden presentar alteraciones en diferentes órganos y sistemas, y no siempre estos trastornos presentan síntomas de forma inmediata. Es por esta razón, que las visitas veterinarias deben realizarse de forma frecuente con el fin de prevenir futuras complicaciones.
            Nuestras mascotas son parte de la familia y necesitan contar con vacunas, desparasitaciones y chequeos periódicos. Esto permitirá prevenir enfermedades futuras, algunas mortales, como el moquillo y parvovirus.
            "
              />)}
            {miServicio === 'Cirugía general y ortopedia' && (<ServiciosImagenes src={cirugia} />)
              && (<Servicio
                imagen="cirugia"
                descripcion="Nuestro quirófano está equipado con tecnología moderna y cirujanos preparados para resolver aquellos casos en los que nuestras mascotas necesitan realizarse un tratamiento quirúrgico u ortopédico. Contamos además con equipos de anestesia por inhalación y monitores que le permite al anestesista manejar de una forma segura este tipo de procedimientos."
              />)}
            {miServicio === 'Hospitalización' && (<ServiciosImagenes src={hospitalizacion} />)
              && (<Servicio
                imagen="hospitalizacion"
                descripcion="hospiPensando en el bienestar y la salud de los pacientes, nuestro hospital está equipado con tres áreas de hospitalización: caninos, felinos e infecciosos. Esto nos permite ofrecer un servicio clínico y médico completo. Cada una de las salas de hospitalización cuenta con las instalaciones necesarias para que durante la permanencia, el paciente se encuentre confortable y que nuestro equipo pueda realizar el monitoreo necesario. La evaluación constante del paciente hospitalizado, a través de exámenes clínicos completos y complementarios, garantiza una correcta recuperación."
              />)}
            {miServicio === 'Farmacia Veterinaria' && (<ServiciosImagenes src={farmacia} />)
              && (<Servicio
                imagen="farmacia"
                descripcion="En Veterinaria Mundo Mascotas queremos entregar un servicio integral a las mascotas, por eso contamos con una farmacia completa en la que encontrarán todas las medicinas necesarias para el tratamiento y cuidado de nuestros pacientes. La farmacia de nuestro hospital está abierta 24/7 para una mejor atención y más comodidad."
              />)}
            {miServicio === 'Oftalmología' && (<ServiciosImagenes src={oftalmologia} />)
              && (<Servicio
                imagen="oftalmologia"
                descripcion="En nuestra clínica, el área de oftalmología veterinaria es una de las de mayor interés y desarrollo. Contamos con especialistas y equipos para realizar un diagnóstico oportuno. Disponemos además con la tecnología para realizar microcirugía oftalmológica como la cirugía de cataratas, la misma que permite devolver la visión al paciente. Muchas enfermedades del ojo pueden llevar a una ceguera irreversible o peor aún, a la pérdida del ojo.

            Dependiendo de los síntomas, se pueden realizar los siguientes exámenes: Evaluación de la película lagrimal, Evaluación del fondo de ojo, Tonometría digital (Medición de la presión intraocular), Gonioscopía (evaluación para detección de glaucoma), Queratectomía con Diamond Burr, Evaluación corneal con Lámpara de Hendidura, Electrorretinografía (evaluación de la retina) y Potenciales Evocados a la Visión.
            
            Entre los procedimientos que realizamos se encuentra: Cirugía de anexos (párpados y pestañas), Cirugía corneal, Cirugía de cataratas, Cirugía oncológica.
          "
              />)}
            {miServicio === 'Odontología' && (<ServiciosImagenes src={odontologia} />)
              && (<Servicio
                imagen="odontologia"
                descripcion="La salud dental es muy importante, la prevención de las enfermedades dentales garantiza una correcta salud general y calidad de vida en los perros y los gatos. En nuestra clínica contamos con un equipo de odontología preparado para resolver los diferentes problemas dentales, tenemos la tecnología necesaria y personal capacitado para realizar profilaxis dentales preventivas, curativas, extracciones dentales simples o complicadas que van ayudar a tu mascota y la mantendrán con una sonrisa brillante.

            ¿Cuándo mi mascota necesita la consulta en odontología?
            El mal aliento, el sarro dental, la pérdida de dientes, la falta de apetito o la dificultad para comer no son situaciones normales en nuestra mascota. Cuando algunas o todas estas manifestaciones se presentan, debemos llevar a nuestro consentido al odontólogo veterinario."
              />)}
            {miServicio === 'Dermatología' && (<ServiciosImagenes src={dermatologia} />)
              && (<Servicio
                imagen="dermatologia"
                descripcion="Las enfermedades de la piel son muy frecuentes en perros y gatos y en muchas ocasiones son problemas crónicos, que afectan la calidad de vida de las mascotas y la convivencia con la familia. Dentro de las enfermedades de la piel que pueden afectar a las mascotas encontramos: alergia a la picadura de pulgas y otros parásitos, alergias generales, infecciones causadas por bacterias y hongos, lesiones por enfermedades autoinmunes, tumores en la piel, otitis crónicas, entre otras. Los especialistas de nuestro hospital se encargarán de tratar de la mejor manera, junto con los propietarios el problema de piel de la mascota.

 
"
              />)}
          </p>
        </div>

      </div>
    </>
  )
}

export default ServiciosMedicos