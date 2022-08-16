import React from 'react';
import Card from '../Servicios/Card';

const Servicio = () => {
  return (
    // <div className='ed-grid'>
    //   <h1>  Servicio</h1>
    // </div>
    <>
      <Card
        titulo='Estética canina '
        imagen='https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        descripcion='Resalta la belleza de tu mascota con profesionales calificados en peluquería canina.'
      />
    </>
  );
}

export default Servicio;