import React from "react"
function VandM (props){
  return(
    <div className="contenedor-VandM">
      <div className="contenedor-texto-VandM">
        <h3 className="contenedor-tirulo"> <strong>{props.titulo}</strong></h3>
        <p className="contenedor-descripcion">{props.descripcion}</p>
        {/* <img className="contendeor-img"
        src={require(`../img/${props.imagen}.jpg`)}
        alt='VandM'
        /> */}
      </div>

    </div>
  )
}

export default VandM;