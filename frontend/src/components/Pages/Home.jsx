import React from 'react';
import Slider from '../layouts/Slider';
import Fondo from '../Fondo/Fondo';
import '../../styles/Home.css'
import Testimonio from '../Testimonios/Testimonio';
import Atencion from '../Atencion/Atencion';
import EnvioInfo from '../Servicios/EnvioInfo'
import Info from '../Info/Info'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <>
      <Fondo
        imagen='clinica'
        titulo='Veterinaria Mundo Mascotas'
        subtitulo=''
        descripcion=''
      />
      <Slider />
      <Atencion />
      <Testimonio />
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

export default Home;
