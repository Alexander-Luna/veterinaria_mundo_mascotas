import React from 'react';
import ShoppingCart from '../Shopping/ShoppingCart';
import EnvioInfo from '../Servicios/EnvioInfo'
import Info from '../Info/Info'
import Footer from '../Footer/Footer'
import Fondo from '../Fondo/Fondo';
import SubMenuP from '../Productos/SubMenuP';
const Productos = () => {
  return (
    <>

      {/* <ShoppingCart /> */}
      <Fondo
        imagen='productos'
        titulo='Veterinaria Mundo Mascotas'
        subtitulo='para servir con amor'
        descripcion='Nutrición completa y balanceda'
      />
      <SubMenuP/>
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