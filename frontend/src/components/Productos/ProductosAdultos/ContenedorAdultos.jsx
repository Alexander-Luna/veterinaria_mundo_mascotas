import React from 'react'
import './ContenedorAdultos.css'
import ProductosAdultos from './ProductosAdultos'
const ContenedorAdultos = () => {
  return (
    <>
      <div className='con-adultos'>

        <ProductosAdultos
          imagen='procan4'
          nombre='Pollo, carne y vegetales'
          descripcion='Alimento completo y balanceado para nutrir a tu cachorro hasta el primer año de edad.'
        />
        <ProductosAdultos
          imagen='procan7'
          nombre='Pollo, arroz y vegetales'
          descripcion='Delicioso alimento que le ofrece a tu perro una nutrición balanceada para su etapa adulta.'
        />
        <ProductosAdultos
          imagen='procan5'
          nombre='Carne, arroz y vegetales'
          descripcion='Alimento completo y balanceado, sabor especial de carne, arroz y vegetales, óptimo para el mantenimiento de tu mascota, en sus años de mayor vitalidad.'
        />
        <ProductosAdultos
          imagen='procan6'
          nombre='Receta original de pollo'
          descripcion='Alimento delicioso y balanceado para el mantenimiento de tu mascota en sus años de mayor vitalidad.'
        />
        <ProductosAdultos
          imagen='alimento_humedo2'
          nombre='Trocitos de pollo'
          descripcion='Alimento completo, alto en proteína, hecho con trozos de carne sabor a pollo, ideal para todo tipo de raza.'
        />
        <ProductosAdultos
          imagen='alimento_humedo3'
          nombre='Trocitos de cerdo'
          descripcion='Alimento completo, alto en proteína, hecho con trozos de carne sabor a cerdo, ideal para todo tipo de raza'
        />
        <ProductosAdultos
          imagen='galletas'
          nombre='Razas pequeñas'
          descripcion='Las galletas Pro-can son una deliciosa y nutritiva forma de recompensar a tu mejor amigo.'
        />
        <ProductosAdultos
          imagen='galletas1'
          nombre='Razas medianas y grandes'
          descripcion='Consiéntelo con galletas Pro-can. Una manera nutritiva de recompensar su buen comportamiento.'
        />
        <ProductosAdultos
          imagen='hueso'
          nombre='Hueso sabor pollo'
        />
        <ProductosAdultos
          imagen='hueso2'
          nombre='Hueso sabor surtido'
        />
      </div>
    </>
  )
}

export default ContenedorAdultos