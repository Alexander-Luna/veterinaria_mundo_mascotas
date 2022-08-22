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
          {/*<img src={require(`../img/${props.imagen}.png`)} />*/}
        </NavLink>
        {/* </h1> */}

        <ul className="menu__links">
          <li className="menu_item">
            <NavLink className="menu__link" to="/"> Inicio </NavLink>
          </li>
          <li className="menu_item">
            <NavLink className="menu__link" to="/clientes">Clientes</NavLink>
          </li>
   {/*       <div className="user">
            <span className="menu_item">
              <b>Bienvenido:</b> Juan Perez
            </span>
          </div>*/}
          <li className="menu_item">
            <NavLink className="menu__link" to="/Salir">Salir</NavLink>
          </li>
        </ul>
      </section>

    </nav>
  )
}

export default Navbar
