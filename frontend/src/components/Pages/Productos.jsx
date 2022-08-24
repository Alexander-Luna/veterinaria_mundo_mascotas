import React from 'react';
import ShoppingCart from '../Shopping/ShoppingCart';
import EnvioInfo from '../Servicios/EnvioInfo'
import Info from '../Info/Info'
import Footer from '../Footer/Footer'

const Productos = () => {
  return (
    <>

      <ShoppingCart />

      <EnvioInfo />
      <Info
        titulo='PARA SERVIR CON AMOR'
      />
      <Footer
        imagen='logo'
      />
    </>


  );
}

export default Productos;