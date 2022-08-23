import React from 'react';
import Fondo from '../Fondo/Fondo';
import ServiciosMedicos from '../Servicios/ServiciosMedicos';
import EnvioInfo from '../Servicios/EnvioInfo'
import Info from '../Info/Info'
import Footer from '../Footer/Footer'
const Servicios = () => {
  return (
    <>
      <Fondo
        imagen='servicios'
        titulo='Veterinaria Mundo Mascotas'
        subtitulo='para servir con amor'
        descripcion='Nuestros Servicios'
      />
      {/* <MenuServicios /> */}
      {/* <Servicio/> */}
      <ServiciosMedicos />

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

export default Servicios;