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
            3.  Si tu mascota ha sufrido algún accidente, pelea, trauma o ataque puede tener daños internos graves, aunque la veamos bien, es mejor que un veterinario la revise y asegurarnos de su bienestar.
            4. Si notas que orina poco o tiene dificultad para hacerlo, hace frecuentemente y observas sangre en la orina acude de urgencia.
            5. Cuando veas a tu mascota desorientada, mareada, no te reconoce o tiene convulsiones acude de urgencia porque puede tener un problema neurológico.
            6.  Los vómitos y las diarreas suelen ser transitorios y comunes en nuestros perros y gatos, pero si notas que tiene dolor, si son jóvenes o ancianos es mejor no esperar y acudir a urgencias para evitar que se descompensen."
              />)}
            {miServicio === 'Consulta externa' && (<ServiciosImagenes src={consulta} />)
              && (<Servicio
                imagen="conculta_externa"
                descripcion="Con el propósito de garantizar la salud y bienestar de nuestros pacientes, el hospital cuenta con atención en departamentos de interés como cardiología, dermatología, nefrourología, gastroenterología y medicina preventiva. Tanto perros como gatos pueden presentar alteraciones en diferentes órganos y sistemas, y no siempre estos trastornos presentan síntomas de forma inmediata. Es por esta razón, que las visitas veterinarias deben realizarse de forma frecuente con el fin de prevenir futuras complicaciones.
            Nuestras mascotas son parte de la familia y necesitan contar con vacunas, desparasitaciones y chequeos periódicos. Esto permitirá prevenir enfermedades futuras, algunas mortales, como el moquillo y parvovirus.
            
            ¿Cuándo mi mascota necesita consulta externa? 
            
            Las visitas de nuestra mascota al veterinario dependerán de la edad. Los cachorros y adultos mayores deben ir más frecuente que los adultos jóvenes. Cuando son adultos la recomendación es asistir al menos una vez al año para mantener actualizadas sus vacunas, las desparasitaciones se realizan cada 3 a 4 meses y el control de pulgas mensualmente.
            Las consultas programadas permiten examinar al paciente y detectar a tiempo enfermedades silenciosas o que recién están empezando incluso sin que notemos algo raro en nuestra mascota. Igualmente, recomendamos que nos visiten cuando vean que su perro o gato presenta cambios de comportamiento o conducta; por ejemplo: no quieren comer, toma mucha o poca agua, se queja, cojea, está con tos, vómitos, diarreas, respira diferente, entre otros signos.
            Recuerda que ellos no hablan y debemos estar muy atentos, es mejor acudir tempranamente y no lamentarnos por enfermedades fatales."
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
            
            ¿Cuándo mi mascota necesita de un oftalmólogo? 
            
            Debemos asistir a la consulta oftalmológica con nuestra mascota siempre que veamos que el aspecto de sus ojos es anormal: color blanco, rojo o nublado. También si presenta lagrimeo o lagañas excesivas, si parpadea más de lo normal o se frota mucho sus ojitos. Por supuesto cuando tiene falla visual, esto se evidencia porque camina inseguro o se choca, lo cual ya indicaría que puede estar ciego."
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

 

            ¿Cuándo mi mascota necesita de un dermatólogo?
            
            La atención a gatos representa un reto para cualquier veterinario ya que su comportamiento requiere de mucha paciencia y pericia. En nuestro hospital nos hemos especializado en felinos; contamos con expertos veterinarios y las instalaciones adecuadas para hacer sentir a los gatos como en casa. Es muy importante la visita periódica al veterinario, especialmente para prevenir y diagnosticar tempranamente enfermedades como sida felino, leucemia felina, toxoplasmosis, diabetes, hipertiroidismo, enfermedades del tracto urinario entre otras. Los gatos, al igual que los perros, deben ser vacunados, desparasitados y examinados al menos dos veces al año para mantenerse saludables, así disfrutaremos de una vida más larga, placentera y de calidad junto a ellos."
              />)}
          </p>
        </div>

      </div>
    </>
  )
}

export default ServiciosMedicos