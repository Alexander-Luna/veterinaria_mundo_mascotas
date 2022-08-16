import '../Servicios/MenuServicios.css'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Servicio from '../Pages/Servicio';
function BasicExample() {
  return (
    <>
      <Nav className='contenedor-menu'>
        <ul className='contenedor-lista'>
          <li className='contenedor-lista-idividual'>
            <div className='contenedor-lista-buton'>
              <a href="#" className="contenedor-enlace">Vacunas</a>
            </div>
          </li>
          <li className='contenedor-lista-idividual'>
            <div className='contenedor-lista-buton'>
              <a href="Estetica_Canina.jsx" className="contenedor-enlace">Estética canina </a>
            </div>
          </li>
          <li className='contenedor-lista-idividual'>
            <div className='contenedor-lista-buton'>
              <a href="#" className="contenedor-enlace">Consultas 24/7</a>
            </div>
          </li>
          <li className='contenedor-lista-idividual'>
            <div className='contenedor-lista-buton'>
              <a href="#" className="contenedor-enlace">Asesoramiento Técnico</a>
            </div>
          </li>
          <li className='contenedor-lista-idividual'>
            <div className='contenedor-lista-buton'>
              <a href="#" className="contenedor-enlace">Inseminación artificial</a>
            </div>
          </li>
          <li className='contenedor-lista-idividual'>
            <div className='contenedor-lista-buton'>
              <a href="#" className="contenedor-enlace">Desparasitaciones</a>
            </div>
          </li>
          <li className='contenedor-lista-idividual'>
            <div className='contenedor-lista-buton'>
              <a href="#" className="contenedor-enlace">Visita a domicilio</a>
            </div>
          </li>
        </ul>
      </Nav>
    </>
  )
}

export default BasicExample;