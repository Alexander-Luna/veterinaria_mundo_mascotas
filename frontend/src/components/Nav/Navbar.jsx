import { React, useContext } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { FaUserAlt, FaCartPlus } from "react-icons/fa";

function Navbar(props) {



  return (
    <nav className="menu">
      <section className="menu__container">
        {/* <h1 className="menu__logo"> */}
        <NavLink className="menu__logo" to="/">
          <img src={require(`../img/${props.imagen}.png`)} />
        </NavLink>
        {/* </h1> */}

        <ul className="menu__links">
          <li className="menu_item">
            <NavLink className="menu__link" to="/"> Inicio </NavLink>
          </li>
          <li className="menu_item">
            <NavLink className="menu__link" to="/nosotros">Nosotros</NavLink>
          </li>
          <li className="menu__item menu__item--show">
            {/* <a href="#" className="menu__link">About
               <img src="../Nav/assets/arrow.svg" className="menu__arrow"/> 
            </a> */}
            <NavLink className="menu__link" to="/servicios"> Servicios </NavLink>
            <ul className="menu__nesting">
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Vacunas</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Estética canina</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Consultas 24/7</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Asesoramiento Técnico</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Inseminación artificial</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Desparasitaciones</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Visita a domicilio</a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__item--show">
            {/* <a href="#" className="menu__link">Projects
              <img src="assets/arrow.svg" className="menu__arrow">

            </a> */}
            <NavLink className="menu__link" to="/productos"> Productos </NavLink>
            <ul className="menu__nesting">
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Alimentos</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Balanceados</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Medicamentos</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Vitaminas</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Accesorios</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Productos avicolas</a>
              </li>
            </ul>
          </li>
          <li className="menu_item">
            <NavLink className="menu__link" to="/contactos"> Contactos </NavLink>
          </li>
        </ul>
        <div className='contenedor-login'>
          <NavLink to="/login">
            <FaUserAlt />
          </NavLink>
        </div>

        <div className='contenedor-cart'>
          <FaCartPlus />
          <span className='item-total'>0</span>
        </div>

        <div className="menu__hamburguer">
          {/* <img src="assets/menu.svg" className="menu__img"> */}
        </div>
      </section>

    </nav>
  )
}

export default Navbar