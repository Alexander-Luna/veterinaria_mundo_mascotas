import React from 'react'
import './ContenedorAdultos.css'
import ProductosAdultos from './ProductosAdultos'
const ContenedorSenior = () => {
  return (
    <>
      <div className='con-adultos'>
        <ProductosAdultos
          imagen='procan9'
          nombre='Pollo, carne y cereales'
          descripcion='Alimento balanceado que le aporta a tu perro mayor de 7 años, una nutrición adecuada que le ayuda al mantenimiento de sus músculos y articulaciones.'
        />
        <ProductosAdultos
          imagen='hueso1'
          nombre='Rejo sabor natural'

        />
        <ProductosAdultos
          imagen='hueso3'
          nombre='Mini Hueso sabor carne'

        />
        <ProductosAdultos
          imagen='hueso4'
          nombre='Rejos sabor carne'

        />

      </div>

    </>
  )
}

export default ContenedorSenior