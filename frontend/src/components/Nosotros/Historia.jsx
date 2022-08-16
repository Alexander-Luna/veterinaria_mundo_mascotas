import React from "react";
import '../Nosotros/Historia.css'
function Historia(props) {
  return (
    <div className="contenedor-historia">
      <img className="imagen-historia"
        src={require(`../img/${props.imagen}.jpg`)}
        alt='historia'
      />
      <div className="contenedor-texto-historia">
        <p className="contenedor-subtitulo">{props.subtitulo}</p>
        <p className="texto-historia">"{props.descripcion}"</p>

      </div>
    </div>
  );
}
export default Historia;