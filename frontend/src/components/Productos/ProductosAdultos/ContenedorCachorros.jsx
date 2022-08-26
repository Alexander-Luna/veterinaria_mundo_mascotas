import React from 'react'
import './ContenedorAdultos.css'
import ProductosAdultos from './ProductosAdultos'

const ContenedorCachorros = () => {
  return (
    <>
      <div className='con-adultos'>
        <ProductosAdultos
          imagen='procan'
          nombre='Receta original de pollo'
          descripcion='Alimento completo y balanceado para nutrir a tu cachorro hasta el primer año de edad.'
        />
        <ProductosAdultos
          imagen='procan2'
          nombre='Pollo, cereales y leche'
          descripcion='Alimento ideal para las primeras etapas de tu cachorro de raza pequeña con las vitaminas y los minerales que necesita.'
        />
        <ProductosAdultos
          imagen='procan3'
          nombre='Equilibrio Natural'
          descripcion='Alimento con fibra benéfica y prebióticos que aseguran la adecuada absorción de nutrientes desde sus primeras etapas.'
        />
        <ProductosAdultos
          imagen='alimento_humedo'
          nombre='Trocitos de pollo'
          descripcion='Alimento completo, alto en proteína, hecho con trozos de carne sabor pollo para cachorros. Latas de 180 gr y 415 gr'
        />
        <ProductosAdultos
          imagen='alimento_humedo1'
          nombre='Trocitos de cerdo'
          descripcion='Alimento completo, alto en proteína, hecho con trozos de carne sabor cerdo para cachorros. Latas de 180gr y 415gr de todas las razas.'
        />

      </div>
    </>
  )
}

export default ContenedorCachorros