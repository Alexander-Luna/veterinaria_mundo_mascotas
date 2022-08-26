import React, { Component } from 'react';
import '../Servicios/Formulario.css';
import '../../styles/LoginAndRegister.css';
import emailjs from 'emailjs-com';
export default class Formulario extends Component {

  render() {

    function enviarEmail(e) {
      e.preventDefault();
      emailjs.sendForm('default_service', 'template_7tdxet2', e.target, 'DZqEOZRy1PkVFLYw-').then(re => {
        alert("Email enviado ");
      }, (e) => {
        alert(JSON.stringify(e));
      }
      );
    }

    return (
      <div className='contenedor-formulario'>
        <form className='formulario' onSubmit={enviarEmail}>
          <div >
            <input id="name"
              type="text" name="name"
              placeholder="Nombre" required/>
          </div>
          <div>
            <input id="last_name" type="text" name="last_name" placeholder="Apellido" required />
          </div>
          <div>
            <input id="email" type="email" placeholder='E-Mail' name="email" required/>
          </div>
          <div>
            <input id="phone" type="number" name="phone" placeholder="telefono" required/>
          </div>
          <div>
            <textarea name="message" id="message" className='contenedor-mensaje' rows="4" cols="40" placeholder="Mensaje" required></textarea>
          </div>
          <button className='envio-informacion' type='submit' value="Validar Correo" >Enviar</button>
        </form>
      </div>

    )
  }
}
