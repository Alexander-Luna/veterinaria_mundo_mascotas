import React from 'react'
import './Footer.css'
import { GrInstagram, GrFacebook, GrTwitter } from "react-icons/gr"
import { FaWhatsapp, FaPhoneAlt,FaEnvelopeOpen } from "react-icons/fa"
import { ImLocation2 } from "react-icons/im";
function Footer (props) {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="#">
              <img src={require(`../img/${props.imagen}.png`)}/>
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>CONTACTO</h2>   
          <p><FaPhoneAlt />  (03) 000 000</p>
          <p><FaWhatsapp />  (+593) 0982677851 - 0939152935</p>
          <p><FaEnvelopeOpen/>  cristosanti1988@homail.com</p>
          <p>  magylo@hotmail.com</p>
          <p><ImLocation2/>  Espejo y Convencion de 1884 Frente al mercado 10 de Noviembre</p>
        </div>
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"> <GrFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><GrInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><GrTwitter /></a>
            {/* <a href="https://whatsapp.com" target="_blank" rel="noreferrer" ><FaWhatsapp /></a> */}
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>&copy; 2022 <b>Wilson11</b> - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  )
}

export default Footer