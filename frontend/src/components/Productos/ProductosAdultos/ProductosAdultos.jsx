import React from 'react'
import './ProductosAdultos.css'

function ProductosAdultos(props) {
  return (
    <>
      <div className='con-pro-ad'>
        <div className='con-img-ad'>
          <img src={require(`../../img/${props.imagen}.png`)} />
        </div>
        <div className='con-info-ad'>
          <div className='con-nombre-ad'>
            <h3>{props.nombre}</h3>
          </div>
          <div className='con-des-ad'>
            <p>{props.descripcion}</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProductosAdultos