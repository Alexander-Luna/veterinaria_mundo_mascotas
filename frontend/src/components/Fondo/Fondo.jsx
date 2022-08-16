import React from "react";
import '../Fondo/Fondo.css'
function Fondo(props){
  return(
    <>
    <div className="contenedor-fondo">
      <img  className="contenedor-imagen"
        src={require(`../img/${props.imagen}.jpg`)}
        alt='fondo'/>
        <h1>{props.titulo}</h1>
        <p>{props.subtitulo}</p>
        <p>{props.descripcion}</p>
    </div>
    </>
  )

}

export default Fondo;