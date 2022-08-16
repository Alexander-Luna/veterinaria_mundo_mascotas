import React from 'react'

function InformacionTarjeta(props) {
  return (
    
    <div>
      InformacionTarjeta

      <button onClick={
        ()=>props.cambiarEstado(true)
      }>Cerrra</button>
    </div>
  )
}

export default InformacionTarjeta