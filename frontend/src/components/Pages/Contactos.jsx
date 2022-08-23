import React from 'react';
import EnvioInfo from '../Servicios/EnvioInfo'
import Info from '../Info/Info'
import Footer from '../Footer/Footer'
const Contactos = () => {
  return (
    <>
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

export default Contactos;